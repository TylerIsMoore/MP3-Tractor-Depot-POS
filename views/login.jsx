const React = require('react')

function log (html) {
    return (
        <html>
            <head>
                <title>Login</title>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = log