const settingsKey = "settings"
const defaultSettings = {
    maxTableRecords: "Neobmedzené",
    dashboardTimeLine: "days",
}

export const getSettings = () => {
    const settings = localStorage.getItem(settingsKey)
    return JSON.parse(settings) || defaultSettings
}

export const getSetting = meno => {
    const setting = getSettings()[meno]
    return setting
}

export const updateSettings = settings => {
    localStorage.setItem(settingsKey, JSON.stringify(settings))
}