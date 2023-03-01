export function handleArgs(argsArr: string[]){
    const args = new Map()
    argsArr.forEach((el) => {
        if (el == "--input"){
            const index = argsArr.indexOf(el)
            args.set('input', argsArr[index + 1])
        } else if (el == "--out"){
            const index = argsArr.indexOf(el)
            args.set('out', argsArr[index + 1])
        } else if (el == "--css"){
            const index = argsArr.indexOf(el)
            args.set('css', argsArr[index + 1])
        } else if (el == "--cssDir"){
            const index = argsArr.indexOf(el)
            args.set('cssDir', argsArr[index + 1])
        } else if (el == "--verbose"){
            const index = argsArr.indexOf(el)
            args.set('cssDir', argsArr[index + 1])
        }
    })
    return args
}