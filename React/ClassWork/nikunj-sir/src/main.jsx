import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import PropExmp from './Nikunj Sir/Lect-31-12-2024/propComponent1.jsx'; // Adjust path if necessary
// import StateExample from './Lect-2612/state_examp.jsx'; // Adjust path if necessary
// import IterableState from './Lect-2612/iterative_state.jsx'; // Adjust path if necessary
import StateExmp1 from './Nikunj Sir/Lect-2-1/stateexm1.jsx'; // Adjust path if necessary

/*
Class-based implementation:
  -> Often used for older React projects, state management, or lifecycle methods.

Function-based implementation:
  -> Preferred approach in modern React (Service-Based Industry uses this approach).
  -> Hooks allow state and lifecycle handling.

Note: All inbuilt JSX components must be returned in lowercase.
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateExmp1/>
  </StrictMode>
);
