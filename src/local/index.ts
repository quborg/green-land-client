import Local from './ar.json';

const local: { [key: string]: string } = Local;

const Tr = (text: string): string => local[text];

export default Tr;
export { Local };
