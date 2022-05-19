"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("posts", [
      {
        user_id: 1,
        title: "Breakneck Ridge",
        address: " Philipstown/Fishkill, New York, U.S",
        distance: "3.4 miles",
        elevation: "1250 ft",
        imgUrl: "https://i.imgur.com/ERxGc2E.jpg",
        content:
          "Breakneck Ridge is a mountain along the Hudson River between Beacon and Cold Spring, New York, straddling the boundary between Dutchess and Putnam counties. Its distinctive rocky cliffs are visible for a long distance when approached from the south, and together with Storm King Mountain on the opposite bank of the river forms Wey-Gat, or Wind Gate, the picturesque northern gateway to the Hudson Highlands. It has several summits, the highest, some distance inland, reaching approximately 1,260 feet (384 m) above sea level.",
        rating: "5",
        mapUrl:
          "https://cdn-assets.alltrails.com/static-map/production/at-map/71753835/trail-us-new-york-breakneck-ridge-breakneck-bypass-wilkinson-trail-loop-at-map-71753835-1642839606-414x200-2.png",
        park: "Hudson Highlands",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        title: "Whiteface Mountain",
        address: "Whiteface Mountain, Wilmington, NY",
        distance: "0.6 to 10 miles",
        elevation: "4867 ft",
        imgUrl: "https://i.imgur.com/z7q4NP3.jpg",
        content:
          "Whiteface Mountain is the fifth-highest mountain in the U.S. state of New York, and one of the High Peaks of the Adirondack Mountains. Set apart from most of the other High Peaks, the summit offers a 360-degree view of the Adirondacks and clear-day glimpses of Vermont and even Canada, where the skyscrapers of Montreal, 80 miles (130 km) away, can be seen on a very clear day. Located in the town of Wilmington, about 13 miles (21 km) from Lake Placid, the mountain's east slope is home to a major ski area with the greatest vertical drop east of the Rockies.",
        rating: "4",
        mapUrl:
          "https://cdn-assets.alltrails.com/static-map/production/at-map/13275287/trail-us-new-york-whiteface-mountain-summit-trail-at-map-13275287-1642612852-414x200-2.png",
        park: "Adirondack Mountains",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        title: "Sam's Point",
        address: "400 Sam's Point Road, Cragsmoor, NY 12420",
        distance: "3.3",
        elevation: "2289 ft",
        imgUrl: "https://i.imgur.com/NjcTMHh.jpg",
        content:
          "Sam's Point Preserve, or Sam's Point Dwarf Pine Ridge Preserve, is a 4,600-acre (19 km2) preserve in Ulster County on the highest point (2,289 feet [698 m]) of the Shawangunk Ridge in New York, on the Wawarsing, New York-Shawangunk town line. It is owned and managed by the New York State Office of Parks, Recreation and Historic Preservation after having previously been managed by The Nature Conservancy. Its unique environment features dwarf pitch pine trees along the ridgetop.",
        rating: "2",
        mapUrl:
          "https://cdn-assets.alltrails.com/static-map/production/at-map/22293768/trail-us-new-york-sams-point-and-verkeerderkill-falls-trail-at-map-22293768-1642651596-414x200-2.png",
        park: "Minnewaska State Park",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        title: "Millbrook Ridge",
        address: " Gardiner, NY 12525",
        distance: "7.9",
        elevation: "1194 ft",
        imgUrl: "https://i.imgur.com/10PinEy.jpg",
        content:
          "Generally considered a moderately challenging route, it takes an average of 3 h 29 min to complete. This is a popular trail for hiking and trail running, but you can still enjoy some solitude during quieter times of day. The trail is open year-round and is beautiful to visit anytime. Dogs are welcome, but must be on a leash.",
        rating: "2",
        mapUrl:
          "https://cdn-assets.alltrails.com/static-map/production/at-map/14341996/trail-us-new-york-millbrook-ridge-trail-at-map-14341996-1647615946-414x200-2.png",
        park: "Mohonk Preserve",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        title: "Shelving Rock",
        address: "Fort Ann, NY 12827",
        distance: "3.4 miles",
        elevation: "1026 ft",
        imgUrl: "https://i.imgur.com/P95eQyQ.jpg",
        content:
          "The trail is on public Forest Preserve in the Lake George Wild Forest Area. Shelving Rock provides a great view of the Narrows and the south basin of Lake George. The trailhead is on Shelving Rock Road, several miles beyond Sly Pond Road or Hogtown Road, which both lead to the start of Shelving Rock. There are multiple parking areas leading up to the trailhead, which begins in the fourth parking area on the right side of the road. This is a popular hike and the parking lots fill up early.",
        rating: "1",
        mapUrl:
          "https://cdn-assets.alltrails.com/static-map/production/at-map/19046804/trail-us-new-york-shelving-rock-mountain-and-shelving-rock-falls-trail-at-map-19046804-1642638504-414x200-2.png",
        park: "Lake George Wild Forest",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        title: "Bull Hill Mountain",
        address: "Bull Hill, Philipstown, NY 10516",
        distance: "5.4 miles",
        elevation: "1391 ft",
        imgUrl: "https://i.imgur.com/EqmJofJ.jpg",
        content:
          "Bull Hill, also known as Mount Taurus, is a mountain north of the village of Cold Spring on the Hudson River in Putnam County in the State of New York. It is part of the river-straddling range known as the Hudson Highlands. The original name came after a bull that used to terrorize the mountain was chased by indignant inhabitants.[5] A hunting party drove the bull over the hill. In an attempt to flee the mountaineers, the bull plunged out into space and fell down.[6] Its broken and shapeless mass on the rocks was memorialized in the name of the mountain the bull used to haunt.",
        rating: "3",
        mapUrl:
          "https://cdn-assets.alltrails.com/static-map/production/at-map/56682114/trail-us-new-york-bull-hill-full-loop--2-at-map-56682114-1642761845-414x200-2.png",
        park: "Hudson Highlands",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        title: "Natural Stone Bridge and Caverns",
        address: "535 Stone Bridge Rd, Pottersville, NY 12860",
        distance: "N/A",
        elevation: "N/A",
        imgUrl: "https://i.imgur.com/8zrk24q.jpg",
        content:
          "Unlike the slow forming limestone caverns, these marble caves were rapidly formed during the last ice age by an unusual East-West trending fault which exposed a layer of ancient marble to raging acidic floodwaters from melting glaciers. Take a walking stick, map, and camera and set out on a self-guided, above-ground tour over a natural stone step nature trail and experience up-close the many unique rock features in the marble gorge, such as potholes, grottos, and mill site waterfalls. Descend into lighted surface caves with raging waterfalls or tranquil dark pools. Cavers are currently completing a survey of the cave systems.",
        rating: "1",
        mapUrl:
          "https://i.pinimg.com/originals/32/44/64/324464d22529be1d5aafb9ac1456fbe7.jpg",
        park: "Lake George Area",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("posts", null, {});
  },
};
