var MapboxClient = require('@mapbox/mapbox-sdk/services/geocoding');
var client = MapboxClient({
	accessToken: process.env.MAPBOX_TOKEN
});

exports.geocode = async (search) => {
	const resp = await client.forwardGeocode({
		query: search.toString(),
		proximity: [-122.34829, 37.932419],
		types: ['region', 'postcode', 'district', 'place', 'locality', 'neighborhood', 'address', 'poi']
	}).send();
	return resp.body;
};