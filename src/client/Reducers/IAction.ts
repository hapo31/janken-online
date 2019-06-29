export default interface IAction {
  type: string;
  payload: any;

  error?: any;
}
