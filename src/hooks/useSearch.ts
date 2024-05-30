import { useReducer } from "react"

const ACTIONS = {
  updateQuery: 'updateQuery',
  updateLevel: 'updateLevel',
  updatePriority: 'updatePriority',
  updateStatus: 'updateStatus'
} as const;


type SearchAction = {
  type: keyof typeof ACTIONS
  payload?: any
}

type Search = {
  query: string,
  level: string,
  priority: string,
  status: string,
}

function reducer(state: Search, action: SearchAction) {
  const { type, payload } = action;

  if (type === ACTIONS.updateQuery) {
    return {
      ...state,
      query: payload
    }
  }
  if (type === ACTIONS.updateLevel) {
    return {
      ...state,
      level: payload
    }
  }
  if (type === ACTIONS.updatePriority) {
    return {
      ...state,
      priority: payload
    }
  }
  if (type === ACTIONS.updateStatus) {
    return {
      ...state,
      status: payload
    }
  }

  return state;
}

export default function useSearch({
  initialQuery = '',
  initialLevel = 'all',
  initialPriority = 'all',
  initialStatus = 'all'
}) {
  const [state, dispatch] = useReducer(reducer, {
    query: initialQuery,
    level:initialLevel,
    priority:initialPriority,
    status: initialStatus
  })
  const { query, level, priority, status } = state


  return {
    query,
    level,
    priority,
    status,
    updateQuery: (queryToUpdate: string) => {
      dispatch({ type: ACTIONS.updateQuery, payload: queryToUpdate })
    },
    updateLevel: (levelToUpdate: string) => {
      dispatch({ type: ACTIONS.updateLevel, payload: levelToUpdate })
    },
    updatePriority: (priorityToUpdate: string) => {
      dispatch({ type: ACTIONS.updatePriority, payload: priorityToUpdate })
    },
    updateStatus: (statusToUpdate: string) => {
      dispatch({ type: ACTIONS.updateStatus, payload: statusToUpdate })
    }
  }
}
