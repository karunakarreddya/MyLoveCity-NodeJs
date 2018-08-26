exports.home = function(req,res){
    res.render('home',{
        title:'I love my city',
        headline:'we believe that every citt has some speciality to say'
    });
}

exports.city = function(req,res){
    var cityName = req.params.city;
    var title,heading;
    var imgCount = 4;

    if(cityName === 'mumbi'){
        title = 'Mumbi';
        heading = "Mumbi: where fort is there in India!";
    }else if(cityName === 'hyd'){
        title = 'Hyderabad';
        heading = 'Hyd: where charminar located in India!';
    }else if(cityName === 'delhi'){
        title = 'Delhi';
        heading = 'Delhi: where Capita located in India!';
    }else if(cityName === 'Agra'){
        title = 'agra';
        heading = 'Agra: where Taj located in India!';
    }else if(cityName === 'Amaravati'){
        title = 'amaravati';
        heading = 'Amaravati: where Buddha located in India!';
        imgCount = 6;
    }
    res.render('city', {
        title : title,
        headline: heading,
        city :cityName,
        numberOfImages:imgCount
    });
}