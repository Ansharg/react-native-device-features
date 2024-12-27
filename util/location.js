export function getMapPreview(lat,lng){
    const image_Url = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=AIzaSyB_D2Lrv0zuwcAtMxy2fj_RlAZjm8FVMY4`
console.log(image_Url)
    return image_Url;
}