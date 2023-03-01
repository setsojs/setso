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
            args.set('css', true)
        } else if (el == "--cssDir"){
            const index = argsArr.indexOf(el)
            args.set('cssDir', argsArr[index + 1])
        } else if (el == "--verbose"){
            args.set('verbose', true)
        }
    })
    return args
}