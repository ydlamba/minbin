export const SET_INPUT: 'SET_INPUT' = 'SET_INPUT';
export const SET_TOOL: 'SET_TOOL' = 'SET_TOOL';

export type Action =
| SetInput
| SetTool;

export function setInput(input: string) {
	return {
		input,
		type: SET_INPUT,
	};
}
export type SetInput = ReturnType<typeof setInput>;

export function setTool(tool: string) {
	return {
		tool,
		type: SET_TOOL,
	};
}
export type SetTool = ReturnType<typeof setTool>;