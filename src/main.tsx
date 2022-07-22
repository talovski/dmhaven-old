import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Spells } from './features/wiki/Spells/Spells';
import { Sidebar } from './modules/Sidebar';
import { Wiki } from './features/wiki/Wiki';
import { Spell } from './features/wiki/Spells/Spell';
import { PlayerClasses } from './features/wiki/PlayerClasses';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Sidebar />
			<Routes>
				<Route path={'/'} element={<App />} />
				<Route path={'/wiki'} element={<Wiki />}>
					<Route path={'spells'} element={<Spells />} />
					<Route path={'spells/:index'} element={<Spell />} />
					<Route path={'classes'} element={<PlayerClasses />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
