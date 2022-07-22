import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectItemText,
	SelectLabel,
	SelectTrigger
} from '@radix-ui/react-select';
import { reset } from './styles/reset';
import { Sidebar } from './modules/Sidebar';

function App() {
	const [count, setCount] = useState(0);
	// reset();
	return (
		<div className="App">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<Select>
				<SelectTrigger>
					<button>Select trigger</button>
				</SelectTrigger>
				<SelectContent>
					<div className="popover">Hi</div>
					<SelectGroup>
						<SelectLabel>ksdmkdmsk</SelectLabel>
						<SelectItem value="Yoooo">
							<SelectItemText>skdmkdmksdmkasmdkdms</SelectItemText>
						</SelectItem>
						<SelectItem value="Yooo 2">
							<SelectItemText>skdmkdmksdmkasmdkdms</SelectItemText>
						</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
			<Popover>
				<PopoverTrigger>
					<button>Hi! I`m popover</button>
				</PopoverTrigger>
				<PopoverContent>
					<div className="popover">Hi! It is popover content</div>
				</PopoverContent>
			</Popover>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">Click on the Vite and React logos to learn more</p>
		</div>
	);
}

export default App;
