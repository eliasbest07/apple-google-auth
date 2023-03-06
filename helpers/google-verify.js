const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = '155780141013-jk4nupaj44jkpao85uo155nm00c1oqro.apps.googleusercontent.com';
const client = new OAuth2Client(CLIENT_ID);
const validarIdToken =  async(token)=>{
    // try cachat 
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: [CLIENT_ID, '155780141013-b5vjv85teg3cq1psl4c28afg7ndtesn9.apps.googleusercontent.com','155780141013-mbvh6d577trp8l3fh5oq6m1bka02d8pg.apps.googleusercontent.com']  // Specify the CLIENT_ID of the app that accesses the backend
        
        });
      
        const payload = ticket.getPayload();
        // const userid = payload['sub'];
        console.log(payload);
        return {
            name: payload['name'],
            picture: payload['picture'],
            email: payload['email']
        }
    } catch (error) {
        return null;
        // return {
        //     ok: false,
        //     msg: error
        // }
    }
   
}

module.exports = {
    validarIdToken
}