const visibilityFilter2 = (state = 'SHOW_ALL2', action) => {
	 

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER2':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter2