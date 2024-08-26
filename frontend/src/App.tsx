import { useState } from 'react';

import { Modal, Navbar, Table } from './components';
import { useSkus } from './lib/hooks/useSkus';
import { MedicationData } from './lib/types';

const App = () => {
  const { skus, loading, error } = useSkus();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<MedicationData | null>(null);

  const handleOpen = () => setIsModalOpen(true);
  const handleClose = () => setIsModalOpen(false);

  const handleAddNewItem = async () => {};

  if (loading) return <p>Loading ...</p>;

  if (error) return <p>Error ...</p>;

  console.log(skus);

  return (
    <main>
      <Navbar onButtonClick={handleOpen} />

      <div className='container mx-auto'>
        <Modal
          isVisible={isModalOpen}
          onClose={handleClose}
          onSubmit={handleAddNewItem}
          data={editItem}
        />

        <div className='mt-5'>{/* <Table data={skus} /> */}</div>
      </div>
    </main>
  );
};

export default App;
