const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const players = {
    'J.T. Realmuto':
        {'age': 31,
        'position': 'Catcher',
        'Average': '.240',
        'OBP': '.319',
        'Slugging' : '.347',
        'OPS': '.666',
        'Home Runs': 3
    },
    'Rhys Hoskins':
        {'age': 29,
        'position': 'First Base',
        'Average': '.251',
        'OBP': '.339',
        'Slugging' : '.467',
        'OPS': '.806',
        'Home Runs': 13
    },
    'Jean Segura':
        {'age': 32,
        'position': 'Second Base',
        'Average': '.275',
        'OBP': '.324',
        'Slugging' : '.407',
        'OPS': '.731',
        'Home Runs': 6
    },
    'Didi Gregorious':
        {'age': 32,
        'position': 'Shortstop',
        'Average': '.270',
        'OBP': '.331',
        'Slugging' : '.374',
        'OPS': '.705',
        'Home Runs': 0
    },
    'Alec Bohm':
        {'age': 25,
        'position': 'Third Base',
        'Average': '.256',
        'OBP': '.294',
        'Slugging' : '.348',
        'OPS': '.642',
        'Home Runs': 4
    },
    'Kyle Schwarber':
        {'age': 29,
        'position': 'Left Field',
        'Average': '.214',
        'OBP': '.340',
        'Slugging' : '.488',
        'OPS': '.828',
        'Home Runs': 19
    },
    'Odubel Herrera':
        {'age': 30,
        'position': 'Center Field',
        'Average': '.236',
        'OBP': '.275',
        'Slugging' : '.421',
        'OPS': '.697',
        'Home Runs': 5
    },
    'Nick Castellanos':
        {'age': 30,
        'position': 'Right Field',
        'Average': '.245',
        'OBP': '.303',
        'Slugging' : '.389',
        'OPS': '.692',
        'Home Runs': 7
    },
    'Bryce Harper':
        {'age': 29,
        'position': 'Designated Hitter',
        'Average': '.326',
        'OBP': '.392',
        'Slugging' : '.618',
        'OPS': '1.010',
        'Home Runs': 15
    },
    'unknown':
        {'age': 31,
        'position': 'Catcher',
        'Average': '.240',
        'OBP': '.319',
        'Slugging' : '.347',
        'OPS': '.666',
        'Home Runs': 3,
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

// app.get('/api', (req,res)=>{
//     res.json(rappers)
// })

app.get('/api/:playerName', (req, res) => {
    const playerName = req.params.playerName
    if(players[playerName]){
        res.json(players[playerName])
    }else{
        res.json(players['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})