import './App.css';

import React from 'react';

import ModalSample1 from './ModalSample1/ModalSample1';
import ModalSample2 from './ModalSample2/ModalSample2';
import ModalSample3 from './ModalSample3/ModalSample3';

export default function App(): React.JSX.Element {
  return (
    <div>
      <header>
        <h1>React Bootstrap Modal sample</h1>
      </header>

      <ModalSample1 />

      <ModalSample2 />

      <ModalSample3 />
    </div>
  );
}
