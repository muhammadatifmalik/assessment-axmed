import { FC } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Button from '../ui/button';
import Input from '../ui/input';
import MultiSelectDropdown from '../ui/multiSelect';
import { SkuFormValues } from '../../lib/types/components/container/skuForm';
import { MedicationData } from '../../lib/types';

interface SkuFormProps {
  onSubmit: (values: SkuFormValues) => void;
  data: MedicationData | null;
}

const SkuForm: FC<SkuFormProps> = ({ onSubmit, data }) => {
  const initialValues: SkuFormValues = {
    medication_name: data ? data.medication_name : '',
    dose: data ? data.dose : '',
    presentation: data ? data.presentation : '',
    unit: data ? data.unit : '',
    countries: data ? data.countries : [],
  };

  const validationSchema = Yup.object({
    medication_name: Yup.string().required('Medication name is required'),
    dose: Yup.string().required('Dose is required'),
    presentation: Yup.string().required('Presentation is required'),
    unit: Yup.string().required('Unit is required'),
    countries: Yup.array()
      .of(Yup.string())
      .min(1, 'Select at least one country')
      .required('Country is required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ values, setFieldValue, isSubmitting, handleChange, handleBlur }) => (
        <Form className='bg-white rounded-lg space-y-6'>
          <div>
            <Input
              name='medication_name'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Medication Name'
              additionClasses='mb-2'
            />

            <ErrorMessage
              name='medication_name'
              component='div'
              className='text-red-500 text-sm mt-1'
            />
          </div>

          <div>
            <Input
              name='dose'
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder='Dose (e.g., 500mg)'
              additionClasses='mb-2'
            />
            <ErrorMessage
              name='dose'
              component='div'
              className='text-red-500 text-sm mt-1'
            />
          </div>

          <div>
            <Field
              name='presentation'
              as='select'
              className='w-full p-3 border rounded-md focus:ring-blue-300 focus:border-blue-300'
            >
              <option value='' label='Select presentation' />
              <option value='Tablet' label='Tablet' />
              <option value='Capsule' label='Capsule' />
              <option value='Liquid' label='Liquid' />
            </Field>
            <ErrorMessage
              name='presentation'
              component='div'
              className='text-red-500 text-sm mt-1'
            />
          </div>

          <div>
            <Field
              name='unit'
              as='select'
              className='w-full p-3 border rounded-md focus:ring-blue-300 focus:border-blue-300'
            >
              <option value='' label='Select unit' />
              <option value='mg' label='mg' />
              <option value='ml' label='ml' />
            </Field>
            <ErrorMessage
              name='unit'
              component='div'
              className='text-red-500 text-sm mt-1'
            />
          </div>

          <div>
            <MultiSelectDropdown
              options={['United States', 'Canada', 'United Kingdom']}
              name='countries'
              value={values.countries}
              onChange={(selected) => setFieldValue('countries', selected)}
              multiple
            />
            <ErrorMessage
              name='countries'
              component='div'
              className='text-red-500 text-sm mt-1'
            />
          </div>

          <div className='flex justify-end space-x-4 mt-6'>
            <Button
              type='submit'
              disabled={isSubmitting}
              className='bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200'
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SkuForm;
