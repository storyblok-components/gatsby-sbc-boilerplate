export const generatePathObject = (path) => {
    let arr = path.split('/')
    let result = []

    function getPathObj(arr, path) {
        if(arr.length === 1) {
            return result.push({ label: path, path: path})
        }
        getPathObj(arr.slice(0, -1), path.slice(0, path.lastIndexOf('/')))
        
        return result.push({ label: arr[arr.length-1], path: path})
    }

    getPathObj(arr, path)
    return result
}
export const trimTrailingSlash = (path) => path.lastIndexOf('/') === path.length - 1 ? path.slice(0, -1) : path
export const trimPrefixSlash = (path) => path.indexOf('/') === 0 ? path.slice(1) : path
export const trimPath = (path) => trimTrailingSlash(trimPrefixSlash(path))
export const capitalise = (string) => string.charAt(0).toUpperCase() + string.slice(1)