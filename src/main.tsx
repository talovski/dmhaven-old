import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spells } from './features/wiki/Spells';
import { Sidebar } from './modules/Sidebar';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Sidebar />
			<Routes>
				<Route path={'/'} element={<App />} />
				<Route path={'/wiki'}>
					<Route path={'spells'} element={<Spells />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
