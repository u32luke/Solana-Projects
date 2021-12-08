import fetch from "node-fetch";
import { open, close } from 'fs';
globalThis.fetch = fetch

var offset = 0;
var url = "https://public-api.solscan.io/token/holders?tokenAddress=SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt&offset="+offset+"&limit=50";

//API request loop. Incrementing offset by 50

for (let call = 0; call < 100; call++) {
    fetch(url)
    .then(function(response))
        open('C:\Users\Luke\Documents\Programming\Solscan\Srm.json', 'wx', (err, fd) => {
            if (err) {
            if (err.code === 'EEXIST') {
                console.error('tokenHolders already exists');
                return;
            }
        
            throw err;
            }
        
        try {
        writeMyData(fd);
    } finally {
        close(fd, (err) => {
        if (err) throw err;
        });
    }
    });
}