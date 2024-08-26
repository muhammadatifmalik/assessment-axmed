import { MedicationData } from '../..';
import { SkuFormValues } from '../container/skuForm';

export interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSubmit: (values: SkuFormValues) => void;
  data: MedicationData | null;
}
