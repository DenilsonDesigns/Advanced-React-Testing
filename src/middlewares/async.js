export default ({ dispatch }) => next => action => {
  //check to see if the action has a promise on its payload prop
  //if not, send action to next
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  //if yes promise, wait for resolve
  //create new action with that data and dispatch
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };

    dispatch(newAction);
  });
};
