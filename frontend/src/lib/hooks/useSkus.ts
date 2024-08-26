/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';

import { API_URL } from '../constants';
import { MedicationData } from '../types';

interface UseSkusReturnType {
  skus: MedicationData[];
  loading: boolean;
  error: string | null;
  createSku: (sku: Omit<MedicationData, 'id'>) => Promise<void>;
  updateSku: (id: number, updatedSku: Partial<MedicationData>) => Promise<void>;
  deleteSku: (id: number) => Promise<void>;
  fetchSkus: () => Promise<void>;
}

export const useSkus = (): UseSkusReturnType => {
  const [skus, setSkus] = useState<MedicationData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchSkus = async () => {
    setLoading(true);
    try {
      const response = await axios.get<MedicationData[]>(API_URL);
      setSkus(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch SKUs');
    } finally {
      setLoading(false);
    }
  };

  const createSku = async (sku: Omit<MedicationData, 'id'>) => {
    setLoading(true);
    try {
      const response = await axios.post<MedicationData>(API_URL, sku);
      setSkus((prevSkus) => [...prevSkus, response.data]);
      setError(null);
    } catch (err) {
      setError('Failed to create SKU');
    } finally {
      setLoading(false);
    }
  };

  const updateSku = async (id: number, updatedSku: Partial<MedicationData>) => {
    setLoading(true);
    try {
      const response = await axios.put<MedicationData>(
        `${API_URL}/${id}`,
        updatedSku
      );
      setSkus((prevSkus) =>
        prevSkus.map((sku) => (sku.id === id ? response.data : sku))
      );
      setError(null);
    } catch (err) {
      setError('Failed to update SKU');
    } finally {
      setLoading(false);
    }
  };

  const deleteSku = async (id: number) => {
    setLoading(true);
    try {
      await axios.delete(`${API_URL}/${id}`);
      setSkus((prevSkus) => prevSkus.filter((sku) => sku.id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete SKU');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSkus();
  }, []);

  return { skus, loading, error, createSku, updateSku, deleteSku, fetchSkus };
};
