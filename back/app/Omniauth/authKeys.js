/**
 * Created by rdidier on 11/21/16.
 */

module.exports = {

    'facebook' : {
        input_token  : 'XXX',
        fields : 'last_name,first_name,picture'
    },
    'ecole42' : {
        client_id: 'XXX',
        client_secret: 'XXX',
        grant_type: 'authorization_code',
        redirect_uri: 'http://107.170.35.172?from=Ecole42'
    },
    'github' : {
        client_id: 'bbb90e851a575c721804',
        client_secret: 'e6beb1592e6113d8efa2c593ebd3d1041849445c',
        redirect_uri: 'http://107.170.35.172'
    },
    'slack' : {
        client_id: 'XXX',
        client_secret: 'XXX'
    },
    'linkedin' : {
        client_id: "XXX",
        client_secret: 'XXX',
        grant_type: 'authorization_code',
        redirect_uri: 'http://107.170.35.172/?from=Linkedin'
    }
};

