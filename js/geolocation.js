export default function getGeolocation(id){

    const $id = document.getElementById(id);

    const successgeo = (position) =>
    {   
        let coords = position.coords;
        
        $id.innerHTML = 
        `
        <ul>
            <li><mark>Latitude:</mark> ${coords.latitude}</li>
            <li><mark>Longitude:</mark> ${coords.longitude}</li>
            <li><b>Accuracy: </b> ${coords.accuracy} meters</li>
        </ul>

        <hr>
        <a href="https://www.google.com.do/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener noreferrer">Click para ver en GOOGLE MAPS</a>
        `;
    };

    const errorgeo = (err) =>{

        $id.innerHTML = `<p><mark>${err}</mark></p>`;
    };

    const geo_options = {
        enableHighAccuracy: true,
        maximumAge        : 30000,
        timeout           : 27000
      };


    window.navigator.geolocation.getCurrentPosition(successgeo,errorgeo,geo_options)

}