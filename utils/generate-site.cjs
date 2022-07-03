const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                // if there's an error, reject the Promise and send the error to the Promise's .catch() method
                reject(err)
                // return out of the rfunction here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return
            }

            resolve({
                ok: true,
                message: 'File created!'
            })

        })
    })
}

const copyFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './src/style.css', err => {
            if (err) {
                reject(err)
                return
            }

            resolve({
                ok: true,
                message: 'File Copied!'
            })
        })
    })
}

module.exports = {writeFile, copyFile}