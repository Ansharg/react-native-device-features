const API_KEY = "AIzaSyB_D2Lrv0zuwcAtMxy2fj_RlAZjm8FVMY4"

export function getMapPreview(lat,lng){
    const image_Url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${API_KEY}`
    return image_Url;
}

export async function getAddress(lat,lng){
    const api = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`
    const response = await fetch(api);
    if (!response.ok) {
        throw new Error("Failed to fetch address!");
    }

    const data = await response.json();
    const address = data.results[0].formatted_address;
    return address;
}

