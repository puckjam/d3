var d3_geo_gnomonic = d3_geo_azimuthal(
  function(cosλcosφ) { return 1 / cosλcosφ; },
  Math.atan
);

d3.geo.gnomonic = function() {
  return d3_geo_projection(d3_geo_gnomonic);
};