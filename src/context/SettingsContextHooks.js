import React, {createContext, useEffect, useState} from 'react'

const defaultValue = {
  settings: {},
  setSettings: () => null
}

export const SettingsContextHooks = createContext(defaultValue);

const SettingsContextHooksProvider = ({children, settings: settingsFromProps = {}}) => {
  const [settings, setSettings] = useState(settingsFromProps)

  useEffect(() => {
    (async () => {
      console.log("use effect in SettingsContextHooks")
      // const allSettings = await getAllSettings()
      // console.log(allSettings)
      // setSettings(allSettings?.SettingsItems?.items[0])
    })()
  }, [])

  return (
    <SettingsContextHooks.Provider value={{settings, setSettings}}>
      {children}
    </SettingsContextHooks.Provider>
  )
}

export default SettingsContextHooksProvider
