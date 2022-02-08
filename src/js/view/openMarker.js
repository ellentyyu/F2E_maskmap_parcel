export default function openMarker(markers, lat, lng){
    markers.eachLayer((layer)=>{
        if(layer._latlng.lat == lat && layer._latlng.lng == lng){
            markers.zoomToShowLayer(layer, function(){
                layer.openPopup();
          });
        }
    })
}