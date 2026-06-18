ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32647").setExtent([429725.487163, 840801.111332, 430415.541831, 841317.531074]);
var wms_layers = [];


        var lyr_google_0 = new ol.layer.Tile({
            'title': 'google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Boundarymarkerbuoys_1 = new ol.format.GeoJSON();
var features_Boundarymarkerbuoys_1 = format_Boundarymarkerbuoys_1.readFeatures(json_Boundarymarkerbuoys_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Boundarymarkerbuoys_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundarymarkerbuoys_1.addFeatures(features_Boundarymarkerbuoys_1);
var lyr_Boundarymarkerbuoys_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundarymarkerbuoys_1, 
                style: style_Boundarymarkerbuoys_1,
                popuplayertitle: 'Boundary marker buoys',
                interactive: true,
                title: '<img src="styles/legend/Boundarymarkerbuoys_1.png" /> Boundary marker buoys'
            });
var format_mooringbuoys_2 = new ol.format.GeoJSON();
var features_mooringbuoys_2 = format_mooringbuoys_2.readFeatures(json_mooringbuoys_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_mooringbuoys_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mooringbuoys_2.addFeatures(features_mooringbuoys_2);
var lyr_mooringbuoys_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mooringbuoys_2, 
                style: style_mooringbuoys_2,
                popuplayertitle: 'mooring buoys',
                interactive: true,
                title: '<img src="styles/legend/mooringbuoys_2.png" /> mooring buoys'
            });
var lyr_no_lifejacket_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'no_lifejacket<br />\
    <img src="styles/legend/no_lifejacket_3_0.png" /> <= 11<br />\
    <img src="styles/legend/no_lifejacket_3_1.png" /> 11 - 21<br />\
    <img src="styles/legend/no_lifejacket_3_2.png" /> 21 - 32<br />\
    <img src="styles/legend/no_lifejacket_3_3.png" /> 32 - 43<br />\
    <img src="styles/legend/no_lifejacket_3_4.png" /> > 43<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/no_lifejacket_3.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429586.905533, 840863.937350, 430271.005533, 841284.537350]
        })
    });
var format_no_lifejacket_4 = new ol.format.GeoJSON();
var features_no_lifejacket_4 = format_no_lifejacket_4.readFeatures(json_no_lifejacket_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_no_lifejacket_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_no_lifejacket_4.addFeatures(features_no_lifejacket_4);
var lyr_no_lifejacket_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_no_lifejacket_4, 
                style: style_no_lifejacket_4,
                popuplayertitle: 'no_lifejacket',
                interactive: true,
                title: '<img src="styles/legend/no_lifejacket_4.png" /> no_lifejacket'
            });
var lyr_lifejacket_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'lifejacket<br />\
    <img src="styles/legend/lifejacket_5_0.png" /> <= 32<br />\
    <img src="styles/legend/lifejacket_5_1.png" /> 32 - 65<br />\
    <img src="styles/legend/lifejacket_5_2.png" /> 65 - 97<br />\
    <img src="styles/legend/lifejacket_5_3.png" /> 97 - 129<br />\
    <img src="styles/legend/lifejacket_5_4.png" /> > 129<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/lifejacket_5.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429589.210035, 840866.584749, 430238.510035, 841229.684749]
        })
    });
var format_lifejacket_6 = new ol.format.GeoJSON();
var features_lifejacket_6 = format_lifejacket_6.readFeatures(json_lifejacket_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_lifejacket_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lifejacket_6.addFeatures(features_lifejacket_6);
var lyr_lifejacket_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lifejacket_6, 
                style: style_lifejacket_6,
                popuplayertitle: 'lifejacket',
                interactive: true,
                title: '<img src="styles/legend/lifejacket_6.png" /> lifejacket'
            });
var lyr_allboat_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'all boat<br />\
    <img src="styles/legend/allboat_7_0.png" /> <= 38<br />\
    <img src="styles/legend/allboat_7_1.png" /> 38 - 76<br />\
    <img src="styles/legend/allboat_7_2.png" /> 76 - 114<br />\
    <img src="styles/legend/allboat_7_3.png" /> 114 - 152<br />\
    <img src="styles/legend/allboat_7_4.png" /> > 152<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/allboat_7.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429371.569869, 840886.474075, 430324.669869, 841700.874075]
        })
    });
var format_B2027point_8 = new ol.format.GeoJSON();
var features_B2027point_8 = format_B2027point_8.readFeatures(json_B2027point_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_B2027point_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B2027point_8.addFeatures(features_B2027point_8);
var lyr_B2027point_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B2027point_8, 
                style: style_B2027point_8,
                popuplayertitle: 'B2027point',
                interactive: true,
                title: '<img src="styles/legend/B2027point_8.png" /> B2027point'
            });
var lyr_SupBoard_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sup Board<br />\
    <img src="styles/legend/SupBoard_9_0.png" /> <= 6<br />\
    <img src="styles/legend/SupBoard_9_1.png" /> 6 - 11<br />\
    <img src="styles/legend/SupBoard_9_2.png" /> 11 - 17<br />\
    <img src="styles/legend/SupBoard_9_3.png" /> 17 - 22<br />\
    <img src="styles/legend/SupBoard_9_4.png" /> > 22<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SupBoard_9.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429686.404024, 840871.822172, 430298.904024, 841294.022172]
        })
    });
var format_SupBoard_10 = new ol.format.GeoJSON();
var features_SupBoard_10 = format_SupBoard_10.readFeatures(json_SupBoard_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_SupBoard_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupBoard_10.addFeatures(features_SupBoard_10);
var lyr_SupBoard_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupBoard_10, 
                style: style_SupBoard_10,
                popuplayertitle: 'Sup Board',
                interactive: true,
                title: '<img src="styles/legend/SupBoard_10.png" /> Sup Board'
            });
var lyr_JetSki_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jet Ski<br />\
    <img src="styles/legend/JetSki_11_0.png" /> <= 1<br />\
    <img src="styles/legend/JetSki_11_1.png" /> > 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JetSki_11.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [430260.378417, 841056.773928, 430284.778417, 841080.373928]
        })
    });
var format_JetSki_12 = new ol.format.GeoJSON();
var features_JetSki_12 = format_JetSki_12.readFeatures(json_JetSki_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_JetSki_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JetSki_12.addFeatures(features_JetSki_12);
var lyr_JetSki_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JetSki_12, 
                style: style_JetSki_12,
                popuplayertitle: 'Jet Ski',
                interactive: true,
                title: '<img src="styles/legend/JetSki_12.png" /> Jet Ski'
            });
var lyr_Kayak_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kayak<br />\
    <img src="styles/legend/Kayak_13_0.png" /> <= 1<br />\
    <img src="styles/legend/Kayak_13_1.png" /> 1 - 3<br />\
    <img src="styles/legend/Kayak_13_2.png" /> 3 - 4<br />\
    <img src="styles/legend/Kayak_13_3.png" /> 4 - 6<br />\
    <img src="styles/legend/Kayak_13_4.png" /> > 6<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Kayak_13.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429680.528163, 840909.959728, 430318.128163, 841265.959728]
        })
    });
var format_Kayak_14 = new ol.format.GeoJSON();
var features_Kayak_14 = format_Kayak_14.readFeatures(json_Kayak_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Kayak_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kayak_14.addFeatures(features_Kayak_14);
var lyr_Kayak_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kayak_14, 
                style: style_Kayak_14,
                popuplayertitle: 'Kayak',
                interactive: true,
                title: '<img src="styles/legend/Kayak_14.png" /> Kayak'
            });
var lyr_Dinghy_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Dinghy<br />\
    <img src="styles/legend/Dinghy_15_0.png" /> <= 16<br />\
    <img src="styles/legend/Dinghy_15_1.png" /> 16 - 32<br />\
    <img src="styles/legend/Dinghy_15_2.png" /> 32 - 48<br />\
    <img src="styles/legend/Dinghy_15_3.png" /> 48 - 64<br />\
    <img src="styles/legend/Dinghy_15_4.png" /> > 64<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Dinghy_15.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429500.712220, 840884.507777, 430312.212220, 841612.207777]
        })
    });
var format_Dinghy_16 = new ol.format.GeoJSON();
var features_Dinghy_16 = format_Dinghy_16.readFeatures(json_Dinghy_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Dinghy_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dinghy_16.addFeatures(features_Dinghy_16);
var lyr_Dinghy_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dinghy_16, 
                style: style_Dinghy_16,
                popuplayertitle: 'Dinghy',
                interactive: true,
                title: '<img src="styles/legend/Dinghy_16.png" /> Dinghy'
            });
var lyr_Swimmers_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Swimmers<br />\
    <img src="styles/legend/Swimmers_17_0.png" /> <= 38<br />\
    <img src="styles/legend/Swimmers_17_1.png" /> 38 - 77<br />\
    <img src="styles/legend/Swimmers_17_2.png" /> 77 - 115<br />\
    <img src="styles/legend/Swimmers_17_3.png" /> 115 - 154<br />\
    <img src="styles/legend/Swimmers_17_4.png" /> > 154<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Swimmers_17.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429586.905533, 840863.937350, 430271.005533, 841284.537350]
        })
    });
var format_Swimmers_18 = new ol.format.GeoJSON();
var features_Swimmers_18 = format_Swimmers_18.readFeatures(json_Swimmers_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Swimmers_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Swimmers_18.addFeatures(features_Swimmers_18);
var lyr_Swimmers_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Swimmers_18, 
                style: style_Swimmers_18,
                popuplayertitle: 'Swimmers',
                interactive: true,
                title: '<img src="styles/legend/Swimmers_18.png" /> Swimmers'
            });
var lyr_Scuba_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Scuba<br />\
    <img src="styles/legend/Scuba_19_0.png" /> <= 6<br />\
    <img src="styles/legend/Scuba_19_1.png" /> 6 - 11<br />\
    <img src="styles/legend/Scuba_19_2.png" /> 11 - 17<br />\
    <img src="styles/legend/Scuba_19_3.png" /> 17 - 23<br />\
    <img src="styles/legend/Scuba_19_4.png" /> > 23<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Scuba_19.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429718.327270, 840893.869391, 430245.427270, 841197.569391]
        })
    });
var format_Scuba_20 = new ol.format.GeoJSON();
var features_Scuba_20 = format_Scuba_20.readFeatures(json_Scuba_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Scuba_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Scuba_20.addFeatures(features_Scuba_20);
var lyr_Scuba_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Scuba_20, 
                style: style_Scuba_20,
                popuplayertitle: 'Scuba',
                interactive: true,
                title: '<img src="styles/legend/Scuba_20.png" /> Scuba'
            });
var lyr_Monohull_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Monohull<br />\
    <img src="styles/legend/Monohull_21_0.png" /> <= 3<br />\
    <img src="styles/legend/Monohull_21_1.png" /> 3 - 6<br />\
    <img src="styles/legend/Monohull_21_2.png" /> 6 - 8<br />\
    <img src="styles/legend/Monohull_21_3.png" /> 8 - 11<br />\
    <img src="styles/legend/Monohull_21_4.png" /> > 11<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Monohull_21.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429647.472538, 840954.006265, 430053.972538, 841284.706265]
        })
    });
var format_Monohull_22 = new ol.format.GeoJSON();
var features_Monohull_22 = format_Monohull_22.readFeatures(json_Monohull_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Monohull_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monohull_22.addFeatures(features_Monohull_22);
var lyr_Monohull_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monohull_22, 
                style: style_Monohull_22,
                popuplayertitle: 'Monohull',
                interactive: true,
                title: '<img src="styles/legend/Monohull_22.png" /> Monohull'
            });
var lyr_SailingCatamaran_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sailing Catamaran<br />\
    <img src="styles/legend/SailingCatamaran_23_0.png" /> <= 8<br />\
    <img src="styles/legend/SailingCatamaran_23_1.png" /> 8 - 16<br />\
    <img src="styles/legend/SailingCatamaran_23_2.png" /> 16 - 24<br />\
    <img src="styles/legend/SailingCatamaran_23_3.png" /> 24 - 33<br />\
    <img src="styles/legend/SailingCatamaran_23_4.png" /> > 33<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SailingCatamaran_23.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429371.569869, 840907.754877, 430187.269869, 841576.254877]
        })
    });
var format_SailingCatamaran_24 = new ol.format.GeoJSON();
var features_SailingCatamaran_24 = format_SailingCatamaran_24.readFeatures(json_SailingCatamaran_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_SailingCatamaran_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SailingCatamaran_24.addFeatures(features_SailingCatamaran_24);
var lyr_SailingCatamaran_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SailingCatamaran_24, 
                style: style_SailingCatamaran_24,
                popuplayertitle: 'Sailing Catamaran',
                interactive: true,
                title: '<img src="styles/legend/SailingCatamaran_24.png" /> Sailing Catamaran'
            });
var lyr_DivingBoat_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Diving Boat<br />\
    <img src="styles/legend/DivingBoat_25_0.png" /> <= 26<br />\
    <img src="styles/legend/DivingBoat_25_1.png" /> 26 - 52<br />\
    <img src="styles/legend/DivingBoat_25_2.png" /> 52 - 78<br />\
    <img src="styles/legend/DivingBoat_25_3.png" /> 78 - 104<br />\
    <img src="styles/legend/DivingBoat_25_4.png" /> > 104<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DivingBoat_25.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429511.310056, 840892.447557, 430159.910056, 841589.047557]
        })
    });
var format_DivingBoat_26 = new ol.format.GeoJSON();
var features_DivingBoat_26 = format_DivingBoat_26.readFeatures(json_DivingBoat_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_DivingBoat_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DivingBoat_26.addFeatures(features_DivingBoat_26);
var lyr_DivingBoat_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DivingBoat_26, 
                style: style_DivingBoat_26,
                popuplayertitle: 'Diving Boat',
                interactive: true,
                title: '<img src="styles/legend/DivingBoat_26.png" /> Diving Boat'
            });
var lyr_Pontoonboat_27 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Pontoon boat<br />\
    <img src="styles/legend/Pontoonboat_27_0.png" /> <= 11<br />\
    <img src="styles/legend/Pontoonboat_27_1.png" /> 11 - 22<br />\
    <img src="styles/legend/Pontoonboat_27_2.png" /> 22 - 33<br />\
    <img src="styles/legend/Pontoonboat_27_3.png" /> 33 - 44<br />\
    <img src="styles/legend/Pontoonboat_27_4.png" /> > 44<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Pontoonboat_27.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [430085.495815, 840888.146305, 430281.395815, 841122.746305]
        })
    });
var format_Pontoonboat_28 = new ol.format.GeoJSON();
var features_Pontoonboat_28 = format_Pontoonboat_28.readFeatures(json_Pontoonboat_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Pontoonboat_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontoonboat_28.addFeatures(features_Pontoonboat_28);
var lyr_Pontoonboat_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pontoonboat_28, 
                style: style_Pontoonboat_28,
                popuplayertitle: 'Pontoon boat',
                interactive: true,
                title: '<img src="styles/legend/Pontoonboat_28.png" /> Pontoon boat'
            });
var lyr_Cargoboat_29 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Cargo boat<br />\
    <img src="styles/legend/Cargoboat_29_0.png" /> <= 1<br />\
    <img src="styles/legend/Cargoboat_29_1.png" /> 1 - 2<br />\
    <img src="styles/legend/Cargoboat_29_2.png" /> 2 - 4<br />\
    <img src="styles/legend/Cargoboat_29_3.png" /> > 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Cargoboat_29.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [430121.218400, 840917.047068, 430244.018400, 841025.147068]
        })
    });
var format_Cargoboat_30 = new ol.format.GeoJSON();
var features_Cargoboat_30 = format_Cargoboat_30.readFeatures(json_Cargoboat_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Cargoboat_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cargoboat_30.addFeatures(features_Cargoboat_30);
var lyr_Cargoboat_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cargoboat_30, 
                style: style_Cargoboat_30,
                popuplayertitle: 'Cargo boat',
                interactive: true,
                title: '<img src="styles/legend/Cargoboat_30.png" /> Cargo boat'
            });
var lyr_Catamaran_31 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Catamaran<br />\
    <img src="styles/legend/Catamaran_31_0.png" /> <= 3<br />\
    <img src="styles/legend/Catamaran_31_1.png" /> 3 - 5<br />\
    <img src="styles/legend/Catamaran_31_2.png" /> 5 - 8<br />\
    <img src="styles/legend/Catamaran_31_3.png" /> 8 - 11<br />\
    <img src="styles/legend/Catamaran_31_4.png" /> > 11<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Catamaran_31.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429616.455145, 840891.531132, 430260.555145, 841426.831132]
        })
    });
var format_Catamaran_32 = new ol.format.GeoJSON();
var features_Catamaran_32 = format_Catamaran_32.readFeatures(json_Catamaran_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Catamaran_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catamaran_32.addFeatures(features_Catamaran_32);
var lyr_Catamaran_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Catamaran_32, 
                style: style_Catamaran_32,
                popuplayertitle: 'Catamaran',
                interactive: true,
                title: '<img src="styles/legend/Catamaran_32.png" /> Catamaran'
            });
var lyr_Fishingboat_33 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Fishing boat<br />\
    <img src="styles/legend/Fishingboat_33_0.png" /> <= 1<br />\
    <img src="styles/legend/Fishingboat_33_1.png" /> > 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Fishingboat_33.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429592.980047, 840976.520186, 429988.980047, 841377.720186]
        })
    });
var format_Fishingboat_34 = new ol.format.GeoJSON();
var features_Fishingboat_34 = format_Fishingboat_34.readFeatures(json_Fishingboat_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Fishingboat_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fishingboat_34.addFeatures(features_Fishingboat_34);
var lyr_Fishingboat_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fishingboat_34, 
                style: style_Fishingboat_34,
                popuplayertitle: 'Fishing boat',
                interactive: true,
                title: '<img src="styles/legend/Fishingboat_34.png" /> Fishing boat'
            });
var lyr_Rowboat_35 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rowboat<br />\
    <img src="styles/legend/Rowboat_35_0.png" /> <= 13<br />\
    <img src="styles/legend/Rowboat_35_1.png" /> 13 - 27<br />\
    <img src="styles/legend/Rowboat_35_2.png" /> 27 - 40<br />\
    <img src="styles/legend/Rowboat_35_3.png" /> 40 - 54<br />\
    <img src="styles/legend/Rowboat_35_4.png" /> > 54<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Rowboat_35.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429820.262848, 840904.359288, 430283.162848, 841143.459288]
        })
    });
var format_Rowboat_36 = new ol.format.GeoJSON();
var features_Rowboat_36 = format_Rowboat_36.readFeatures(json_Rowboat_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Rowboat_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rowboat_36.addFeatures(features_Rowboat_36);
var lyr_Rowboat_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rowboat_36, 
                style: style_Rowboat_36,
                popuplayertitle: 'Rowboat',
                interactive: true,
                title: '<img src="styles/legend/Rowboat_36.png" /> Rowboat'
            });
var lyr_Yacht_37 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Yacht<br />\
    <img src="styles/legend/Yacht_37_0.png" /> <= 2<br />\
    <img src="styles/legend/Yacht_37_1.png" /> 2 - 5<br />\
    <img src="styles/legend/Yacht_37_2.png" /> 5 - 7<br />\
    <img src="styles/legend/Yacht_37_3.png" /> 7 - 9<br />\
    <img src="styles/legend/Yacht_37_4.png" /> > 9<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Yacht_37.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429610.652710, 840943.486316, 430245.452710, 841309.986316]
        })
    });
var format_Yacht_38 = new ol.format.GeoJSON();
var features_Yacht_38 = format_Yacht_38.readFeatures(json_Yacht_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Yacht_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yacht_38.addFeatures(features_Yacht_38);
var lyr_Yacht_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yacht_38, 
                style: style_Yacht_38,
                popuplayertitle: 'Yacht',
                interactive: true,
                title: '<img src="styles/legend/Yacht_38.png" /> Yacht'
            });
var lyr_RigidInflatableBoat_39 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Rigid Inflatable Boat<br />\
    <img src="styles/legend/RigidInflatableBoat_39_0.png" /> <= 10<br />\
    <img src="styles/legend/RigidInflatableBoat_39_1.png" /> 10 - 20<br />\
    <img src="styles/legend/RigidInflatableBoat_39_2.png" /> 20 - 30<br />\
    <img src="styles/legend/RigidInflatableBoat_39_3.png" /> 30 - 40<br />\
    <img src="styles/legend/RigidInflatableBoat_39_4.png" /> > 40<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/RigidInflatableBoat_39.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429636.989644, 840888.949905, 430279.889644, 841195.249905]
        })
    });
var format_RigidInflatableBoat_40 = new ol.format.GeoJSON();
var features_RigidInflatableBoat_40 = format_RigidInflatableBoat_40.readFeatures(json_RigidInflatableBoat_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_RigidInflatableBoat_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RigidInflatableBoat_40.addFeatures(features_RigidInflatableBoat_40);
var lyr_RigidInflatableBoat_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RigidInflatableBoat_40, 
                style: style_RigidInflatableBoat_40,
                popuplayertitle: 'Rigid Inflatable Boat',
                interactive: true,
                title: '<img src="styles/legend/RigidInflatableBoat_40.png" /> Rigid Inflatable Boat'
            });
var lyr_SportFishingBoat_41 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sport Fishing Boat<br />\
    <img src="styles/legend/SportFishingBoat_41_0.png" /> <= 1<br />\
    <img src="styles/legend/SportFishingBoat_41_1.png" /> 1 - 2<br />\
    <img src="styles/legend/SportFishingBoat_41_2.png" /> 2 - 3<br />\
    <img src="styles/legend/SportFishingBoat_41_3.png" /> 3 - 4<br />\
    <img src="styles/legend/SportFishingBoat_41_4.png" /> > 4<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SportFishingBoat_41.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429530.483677, 841006.441637, 430051.783677, 841516.441637]
        })
    });
var format_SportFishingBoat_42 = new ol.format.GeoJSON();
var features_SportFishingBoat_42 = format_SportFishingBoat_42.readFeatures(json_SportFishingBoat_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_SportFishingBoat_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SportFishingBoat_42.addFeatures(features_SportFishingBoat_42);
var lyr_SportFishingBoat_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SportFishingBoat_42, 
                style: style_SportFishingBoat_42,
                popuplayertitle: 'Sport Fishing Boat',
                interactive: true,
                title: '<img src="styles/legend/SportFishingBoat_42.png" /> Sport Fishing Boat'
            });
var lyr_Longtailboat_43 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Long tail boat<br />\
    <img src="styles/legend/Longtailboat_43_0.png" /> <= 3<br />\
    <img src="styles/legend/Longtailboat_43_1.png" /> 3 - 7<br />\
    <img src="styles/legend/Longtailboat_43_2.png" /> 7 - 10<br />\
    <img src="styles/legend/Longtailboat_43_3.png" /> 10 - 13<br />\
    <img src="styles/legend/Longtailboat_43_4.png" /> > 13<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Longtailboat_43.png",
            attributions: ' ',
            projection: 'EPSG:32647',
            alwaysInRange: true,
            imageExtent: [429376.823586, 840888.975696, 430324.623586, 841621.575696]
        })
    });
var format_Longtailboat_44 = new ol.format.GeoJSON();
var features_Longtailboat_44 = format_Longtailboat_44.readFeatures(json_Longtailboat_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Longtailboat_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Longtailboat_44.addFeatures(features_Longtailboat_44);
var lyr_Longtailboat_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Longtailboat_44, 
                style: style_Longtailboat_44,
                popuplayertitle: 'Long tail boat',
                interactive: true,
                title: '<img src="styles/legend/Longtailboat_44.png" /> Long tail boat'
            });
var group_Longtailboat = new ol.layer.Group({
                                layers: [lyr_Longtailboat_43,lyr_Longtailboat_44,],
                                fold: 'open',
                                title: 'Long tail boat'});
var group_SportFishingBoat = new ol.layer.Group({
                                layers: [lyr_SportFishingBoat_41,lyr_SportFishingBoat_42,],
                                fold: 'open',
                                title: 'Sport Fishing Boat'});
var group_RigidInflatableBoat = new ol.layer.Group({
                                layers: [lyr_RigidInflatableBoat_39,lyr_RigidInflatableBoat_40,],
                                fold: 'open',
                                title: 'Rigid Inflatable Boat'});
var group_Yacht = new ol.layer.Group({
                                layers: [lyr_Yacht_37,lyr_Yacht_38,],
                                fold: 'open',
                                title: 'Yacht'});
var group_Rowboat = new ol.layer.Group({
                                layers: [lyr_Rowboat_35,lyr_Rowboat_36,],
                                fold: 'open',
                                title: 'Rowboat'});
var group_Fishingboat = new ol.layer.Group({
                                layers: [lyr_Fishingboat_33,lyr_Fishingboat_34,],
                                fold: 'open',
                                title: 'Fishing boat'});
var group_Catamaran = new ol.layer.Group({
                                layers: [lyr_Catamaran_31,lyr_Catamaran_32,],
                                fold: 'open',
                                title: 'Catamaran'});
var group_Cargoboat = new ol.layer.Group({
                                layers: [lyr_Cargoboat_29,lyr_Cargoboat_30,],
                                fold: 'open',
                                title: 'Cargo boat'});
var group_Pontoonboat = new ol.layer.Group({
                                layers: [lyr_Pontoonboat_27,lyr_Pontoonboat_28,],
                                fold: 'open',
                                title: 'Pontoon boat'});
var group_DivingBoat = new ol.layer.Group({
                                layers: [lyr_DivingBoat_25,lyr_DivingBoat_26,],
                                fold: 'open',
                                title: 'Diving Boat'});
var group_SailingCatamaran = new ol.layer.Group({
                                layers: [lyr_SailingCatamaran_23,lyr_SailingCatamaran_24,],
                                fold: 'open',
                                title: 'Sailing Catamaran'});
var group_Monohull = new ol.layer.Group({
                                layers: [lyr_Monohull_21,lyr_Monohull_22,],
                                fold: 'open',
                                title: 'Monohull'});
var group_Scuba = new ol.layer.Group({
                                layers: [lyr_Scuba_19,lyr_Scuba_20,],
                                fold: 'open',
                                title: 'Scuba'});
var group_Swimmers = new ol.layer.Group({
                                layers: [lyr_Swimmers_17,lyr_Swimmers_18,],
                                fold: 'open',
                                title: 'Swimmers'});
var group_Dinghy = new ol.layer.Group({
                                layers: [lyr_Dinghy_15,lyr_Dinghy_16,],
                                fold: 'open',
                                title: 'Dinghy'});
var group_Kayak = new ol.layer.Group({
                                layers: [lyr_Kayak_13,lyr_Kayak_14,],
                                fold: 'open',
                                title: 'Kayak'});
var group_JetSki = new ol.layer.Group({
                                layers: [lyr_JetSki_11,lyr_JetSki_12,],
                                fold: 'open',
                                title: 'Jet Ski'});
var group_SupBoard = new ol.layer.Group({
                                layers: [lyr_SupBoard_9,lyr_SupBoard_10,],
                                fold: 'open',
                                title: 'Sup Board'});
var group_AllboatHeatmap2027 = new ol.layer.Group({
                                layers: [lyr_allboat_7,lyr_B2027point_8,],
                                fold: 'open',
                                title: 'All boat Heatmap 20-27'});
var group_lifejacket = new ol.layer.Group({
                                layers: [lyr_lifejacket_5,lyr_lifejacket_6,],
                                fold: 'open',
                                title: 'lifejacket'});
var group_no_lifejacket = new ol.layer.Group({
                                layers: [lyr_no_lifejacket_3,lyr_no_lifejacket_4,],
                                fold: 'open',
                                title: 'no_lifejacket'});
var group_Buoys = new ol.layer.Group({
                                layers: [lyr_Boundarymarkerbuoys_1,lyr_mooringbuoys_2,],
                                fold: 'close',
                                title: 'Buoys'});

lyr_google_0.setVisible(true);lyr_Boundarymarkerbuoys_1.setVisible(true);lyr_mooringbuoys_2.setVisible(true);lyr_no_lifejacket_3.setVisible(false);lyr_no_lifejacket_4.setVisible(false);lyr_lifejacket_5.setVisible(false);lyr_lifejacket_6.setVisible(false);lyr_allboat_7.setVisible(false);lyr_B2027point_8.setVisible(false);lyr_SupBoard_9.setVisible(false);lyr_SupBoard_10.setVisible(false);lyr_JetSki_11.setVisible(false);lyr_JetSki_12.setVisible(false);lyr_Kayak_13.setVisible(false);lyr_Kayak_14.setVisible(false);lyr_Dinghy_15.setVisible(false);lyr_Dinghy_16.setVisible(false);lyr_Swimmers_17.setVisible(false);lyr_Swimmers_18.setVisible(false);lyr_Scuba_19.setVisible(false);lyr_Scuba_20.setVisible(false);lyr_Monohull_21.setVisible(false);lyr_Monohull_22.setVisible(false);lyr_SailingCatamaran_23.setVisible(false);lyr_SailingCatamaran_24.setVisible(false);lyr_DivingBoat_25.setVisible(false);lyr_DivingBoat_26.setVisible(false);lyr_Pontoonboat_27.setVisible(false);lyr_Pontoonboat_28.setVisible(false);lyr_Cargoboat_29.setVisible(false);lyr_Cargoboat_30.setVisible(false);lyr_Catamaran_31.setVisible(false);lyr_Catamaran_32.setVisible(false);lyr_Fishingboat_33.setVisible(false);lyr_Fishingboat_34.setVisible(false);lyr_Rowboat_35.setVisible(false);lyr_Rowboat_36.setVisible(false);lyr_Yacht_37.setVisible(false);lyr_Yacht_38.setVisible(false);lyr_RigidInflatableBoat_39.setVisible(false);lyr_RigidInflatableBoat_40.setVisible(false);lyr_SportFishingBoat_41.setVisible(false);lyr_SportFishingBoat_42.setVisible(false);lyr_Longtailboat_43.setVisible(false);lyr_Longtailboat_44.setVisible(false);
var layersList = [lyr_google_0,group_Buoys,group_no_lifejacket,group_lifejacket,group_AllboatHeatmap2027,group_SupBoard,group_JetSki,group_Kayak,group_Dinghy,group_Swimmers,group_Scuba,group_Monohull,group_SailingCatamaran,group_DivingBoat,group_Pontoonboat,group_Cargoboat,group_Catamaran,group_Fishingboat,group_Rowboat,group_Yacht,group_RigidInflatableBoat,group_SportFishingBoat,group_Longtailboat];
lyr_Boundarymarkerbuoys_1.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', });
lyr_mooringbuoys_2.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', });
lyr_no_lifejacket_4.set('fieldAliases', {'id': 'id', 'Act_type': 'Act_type', 'Swim_area': 'Swim_area', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_lifejacket_6.set('fieldAliases', {'id': 'id', 'Act_type': 'Act_type', 'Swim_area': 'Swim_area', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_B2027point_8.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_SupBoard_10.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_JetSki_12.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Kayak_14.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Dinghy_16.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Swimmers_18.set('fieldAliases', {'id': 'id', 'Act_type': 'Act_type', 'Swim_area': 'Swim_area', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', 'id_2': 'id_2', 'Act_type_2': 'Act_type_2', 'Swim_area_': 'Swim_area_', 'Date_2': 'Date_2', 'Time_2': 'Time_2', 'X_2': 'X_2', 'Y_2': 'Y_2', });
lyr_Scuba_20.set('fieldAliases', {'id': 'id', 'Act_type': 'Act_type', 'Swim_area': 'Swim_area', 'Date': 'Date', 'Time': 'Time', });
lyr_Monohull_22.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_SailingCatamaran_24.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_DivingBoat_26.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Pontoonboat_28.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Cargoboat_30.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Catamaran_32.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Fishingboat_34.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Rowboat_36.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Yacht_38.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_RigidInflatableBoat_40.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_SportFishingBoat_42.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Longtailboat_44.set('fieldAliases', {'id': 'id', 'BoatT': 'BoatT', 'BoatE': 'BoatE', 'Park': 'Park', 'Length': 'Length', 'Date': 'Date', 'Time': 'Time', 'X': 'X', 'Y': 'Y', });
lyr_Boundarymarkerbuoys_1.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_mooringbuoys_2.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'HasLabel': 'Range', 'LabelID': 'TextEdit', });
lyr_no_lifejacket_4.set('fieldImages', {'id': '', 'Act_type': '', 'Swim_area': '', 'Date': '', 'Time': '', 'X': '', 'Y': '', });
lyr_lifejacket_6.set('fieldImages', {'id': '', 'Act_type': '', 'Swim_area': '', 'Date': '', 'Time': '', 'X': '', 'Y': '', });
lyr_B2027point_8.set('fieldImages', {'id': '', 'BoatT': '', 'BoatE': '', 'Park': '', 'Length': '', 'Date': '', 'Time': '', 'X': '', 'Y': '', });
lyr_SupBoard_10.set('fieldImages', {'id': '', 'BoatT': '', 'BoatE': '', 'Park': '', 'Length': '', 'Date': '', 'Time': '', 'X': '', 'Y': '', });
lyr_JetSki_12.set('fieldImages', {'id': '', 'BoatT': '', 'BoatE': '', 'Park': '', 'Length': '', 'Date': '', 'Time': '', 'X': '', 'Y': '', });
lyr_Kayak_14.set('fieldImages', {'id': '', 'BoatT': '', 'BoatE': '', 'Park': '', 'Length': '', 'Date': '', 'Time': '', 'X': '', 'Y': '', });
lyr_Dinghy_16.set('fieldImages', {'id': '', 'BoatT': '', 'BoatE': '', 'Park': '', 'Length': '', 'Date': '', 'Time': '', 'X': '', 'Y': '', });
lyr_Swimmers_18.set('fieldImages', {'id': 'TextEdit', 'Act_type': 'TextEdit', 'Swim_area': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'id_2': 'TextEdit', 'Act_type_2': 'TextEdit', 'Swim_area_': 'TextEdit', 'Date_2': 'DateTime', 'Time_2': 'TextEdit', 'X_2': 'TextEdit', 'Y_2': 'TextEdit', });
lyr_Scuba_20.set('fieldImages', {'id': '', 'Act_type': '', 'Swim_area': '', 'Date': '', 'Time': '', });
lyr_Monohull_22.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_SailingCatamaran_24.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_DivingBoat_26.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Pontoonboat_28.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Cargoboat_30.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Catamaran_32.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Fishingboat_34.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Rowboat_36.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Yacht_38.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_RigidInflatableBoat_40.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_SportFishingBoat_42.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Longtailboat_44.set('fieldImages', {'id': 'TextEdit', 'BoatT': 'TextEdit', 'BoatE': 'TextEdit', 'Park': 'TextEdit', 'Length': 'TextEdit', 'Date': 'DateTime', 'Time': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Boundarymarkerbuoys_1.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', });
lyr_mooringbuoys_2.set('fieldLabels', {'OID_': 'no label', 'Name': 'no label', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'HasLabel': 'no label', 'LabelID': 'no label', });
lyr_no_lifejacket_4.set('fieldLabels', {'id': 'no label', 'Act_type': 'no label', 'Swim_area': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_lifejacket_6.set('fieldLabels', {'id': 'no label', 'Act_type': 'no label', 'Swim_area': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_B2027point_8.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_SupBoard_10.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_JetSki_12.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Kayak_14.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Dinghy_16.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Swimmers_18.set('fieldLabels', {'id': 'no label', 'Act_type': 'no label', 'Swim_area': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', 'id_2': 'no label', 'Act_type_2': 'no label', 'Swim_area_': 'no label', 'Date_2': 'no label', 'Time_2': 'no label', 'X_2': 'no label', 'Y_2': 'no label', });
lyr_Scuba_20.set('fieldLabels', {'id': 'no label', 'Act_type': 'no label', 'Swim_area': 'no label', 'Date': 'no label', 'Time': 'no label', });
lyr_Monohull_22.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_SailingCatamaran_24.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_DivingBoat_26.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Pontoonboat_28.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Cargoboat_30.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Catamaran_32.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Fishingboat_34.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Rowboat_36.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Yacht_38.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_RigidInflatableBoat_40.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_SportFishingBoat_42.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Longtailboat_44.set('fieldLabels', {'id': 'no label', 'BoatT': 'no label', 'BoatE': 'no label', 'Park': 'no label', 'Length': 'no label', 'Date': 'no label', 'Time': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_Longtailboat_44.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});