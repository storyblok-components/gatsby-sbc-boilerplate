import React, {createContext, useEffect, useState} from 'react'

const defaultValue = {
  data: {},
  setData: () => null
}

export const PageContextHooks = createContext(defaultValue);

const PageContextHooksProvider = ({children, data: dataFromProps = {}}) => {
  const [data, setData] = useState(dataFromProps)

  useEffect(() => {
    (async () => {
      console.log("use effect in PageContextHooks")
    })()
  }, [])

  return (
    <PageContextHooks.Provider value={{data, setData}}>
      {children}
    </PageContextHooks.Provider>
  )
}

export default PageContextHooksProvider
