
    var myHeaders = new Headers();
    myHeaders.append("Authorization", 'OAuth oauth_consumer_key="956C9C27362BA4EF54B42964178D163A", oauth_signature_method="PLAINTEXT", oauth_timestamp="1699004283", oauth_nonce="WbhIXVELUlX", oauth_version="1.0", oauth_signature="03D959C427B5D9CE48DD83E4DA450ACD&"');

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
    };

    fetch("https://api.tmsandbox.co.nz/v1/Listings/2149567351.json", requestOptions)
        .then(response => response.json()) // Use response.json() to parse JSON
        .then(result => {
            const price = result.PriceDisplay;
            const location = result.Attributes.find(attr => attr.Name === 'location')?.Value;
            const latitude = result.GeographicLocation.Latitude;
            const longitude = result.GeographicLocation.Longitude;

            console.log("Price:", price);
            console.log("Location:", location);
            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);
        })
        .catch(error => console.error('Error:', error));

