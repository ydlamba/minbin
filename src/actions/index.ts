export const SET_TOOL: 'SET_TOOL' = 'SET_TOOL';

export type Action =
  | SetTool;

export function setTool(tool: string) {
  return {
    tool,
    type: SET_TOOL,
  };
}
export type SetTool = ReturnType<typeof setTool>;