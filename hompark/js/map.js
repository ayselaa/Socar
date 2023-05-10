// Create Map
var map = new google.maps.Map(document.getElementById("map"), {
  center: { lat: 40.143105, lng: 47.576927 },
  zoom: 7,
  maxZoom: 15,
  minZoom: 7,
});
// Create an array of marker objects
var markers = [
  new google.maps.Marker({
    id: 1,
    position: { lat: 40.565247, lng: 49.697788 },
    title: "Sumqayıt şəhəri, 10-cu mikrorayon, Babək küçəsi 208.",
    map: map,
    description: "11i Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 2,
    position: { lat: 39.789238, lng: 46.754616 },
    title: "Şuşa şəhəri",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 3,
    position: { lat: 41.327469, lng: 48.148575 },
    title:
      "Qusar rayonu, Qusar-Laza yolunun 29-cu km-də yerləşən Şahdağ Turizm Mərkəzinin ərazisi",
    map: map,
    description: "6s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 4,
    position: { lat: 40.481506, lng: 49.836922 },
    title:
      "Bakı şəhəri, Binəqədi rayonu, Binəqədi qəsəbəsinin şimal hissəsi, Binəqədi – Novxanı yolu.",
    map: map,
    description: "20 Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 5,
    position: { lat: 38.7358312, lng: 48.6478097 },
    title: "Lerik rayonu, Piran kəndi, 20-ci km.",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 6,
    position: { lat: 39.6448135, lng: 49.0096903 },
    title: "Salyan rayonu, Salyan şəhəri, Ələt-Astara yolu, 19-cu km.",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 7,
    position: { lat: 40.4334679, lng: 49.7839394 },
    title:
      "Bakı şəhəri, Biləcəri qəsəbəsi, Sumqayıt şosesi, 2-ci km. 4 ünvanında, Dövlət Yol Polis İdarəsinə məxsus ekologiya postu yaxınlığında",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 8,
    position: { lat: 40.645077, lng: 46.861198 },
    title:
      "Gürcüstan-Qazax-Bakı magistralının üzərində - Goranboy rayonunun Boluslu kəndi ərazisi",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 9,
    position: { lat: 40.845223, lng: 47.219486 },
    title:
      "Yevlax-Zaqatala yolu istiqaməti, Şəki şəhərinin sonuncu kəndi sayılan Çayqaraqoyunlu kəndi ərazisi",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 10,
    position: { lat: 40.566123, lng: 49.856742 },
    title: "Binəqədi rayonu, Goradil qəsəbəsi",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 11,
    position: { lat: 40.35494995665633, lng: 49.98022083786964 },
    title: "Zığ Hövsan yolu",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 12,
    position: { lat: 40.362507676381995, lng: 49.79659167571003 },
    title: "Yasamal Rayonu, Qanlı Göl yaxınlığında",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 13,
    position: { lat: 40.45839217737267, lng: 50.33639524598868 },
    title: "Pirallahi qəsəbəsi",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 14,
    position: { lat: 40.44167366898836, lng: 47.90471711719874 },
    title: "Ucar rayonu, Müsüslü kəndi",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 15,
    position: { lat: 40.64506315341404, lng: 46.86577158048749 },
    title: "Goranboy rayonu, Cinli Boluslu kəndi",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 16,
    position: { lat: 40.37615473821027, lng: 49.91473902744474 },
    title: "Xətai rayonu, Nobel prospekti",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 17,
    position: { lat: 40.59588545549406, lng: 48.697361110243946 },
    title: "Şamaxı rayonu, Sabir qəsəbəsi",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 18,
    position: { lat: 40.656964353975965, lng: 48.64114978350699 },
    title: "Şamaxı rayonu, Əngəxaran kəndi",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 19,
    position: { lat: 40.04261200055342, lng: 49.06045155599713 },
    title: "Hacıqabul rayonu, Pirsaat qəsəbəsi",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 20,
    position: { lat: 40.42539474231832, lng: 49.90617351606488 },
    title: "Z.Bünyadov pr-ti  +994125652885",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 21,
    position: { lat: 40.9702533, lng: 49.2445387 },
    title: "Siyəzən rayonu, Bakı-Quba yolunun 86-cı kilometrliyi, sol tərəf",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 22,
    position: { lat: 40.97082, lng: 49.2453 },
    title: "Siyəzən rayonu, Bakı-Quba yolunun 86-cı kilometrliyi, sağ tərəf",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 23,
    position: { lat: 40.39247, lng: 49.91479 },
    title:
      "Bakı şəhəri, Babək pr-ti ilə O.Vəliyev küçəsinin kəsişməsi Tel:570-08-02 ",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 24,
    position: { lat: 40.39353, lng: 49.93257 },
    title:
      "Bakı şəhəri, Xətai rayonu, Babək pr-ti 2315-ci məhəllə(Maşın bazarının yaxınlığı) Tel:570-06-12",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 25,
    position: { lat: 40.43522, lng: 49.93094 },
    title:
      "Bakı şəhəri, Sabunçu rayonu, Sabunçu ŞTQ, Sabunçu dairəsinin cənub qərb hissəsi. H.Əliyev pr-ti 333 Tel:565-17-51",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 26,
    position: { lat: 40.5562953, lng: 49.638338 },
    title:
      "Bakı Quba yolunun 28-ci km-də, yolun sag tərəfində, Ceyranbatan qəsəbəsi yaxınlığında  Tel:555-11-52",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 27,
    position: { lat: 40.5564, lng: 49.63995 },
    title:
      "Bakı Quba yolunun 28-ci km-də, yolun sol tərəfində, Ceyranbatan qəsəbəsi yaxınlığında  Tel:555-11-52",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 28,
    position: { lat: 40.2959, lng: 49.75288 },
    title:
      "Bakı Salyan şossesinin 14-cü km-i, Lökbatan qəsəbəsi yaxınlığında, yolun sağ tərəfində  Tel:565-13-56",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 29,
    position: { lat: 39.970193, lng: 49.4165262 },
    title:
      "Bakı Salyan şossesinin 70-ci km-i, Haciqabul-Astara yol ayrıcı, yolun sol tərəfində Tel:544-26-73",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 30,
    position: { lat: 39.9675712, lng: 49.4103489 },
    title:
      "Bakı Salyan şossesinin 70-ci km-i, Haciqabul-Astara yol ayrıcı, yolun sağ tərəfində Tel:544-26-86",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 31,
    position: { lat: 40.31858, lng: 49.82177 },
    title:
      "Bakı şəhəri, Səbail rayonu , Yeni Salyan yolu, 25 km, Bina 31 (Bibiheybət məscidinden şəhər istiqamətində yeni çəkilmiş yolun sağ tərəfində) Tel:555-50-82",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 32,
    position: { lat: 40.35525, lng: 49.95408 },
    title: "Zığ şosessi, Gənclik parkı yanında.",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 33,
    position: { lat: 40.4327, lng: 50.05867 },
    title: "Aeroport-Bakı yeni salınmış beton yolun sağ tərəfində",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 34,
    position: { lat: 40.46438, lng: 49.94401 },
    title:
      "Bakı şəhəri, Sabunçu rayonu, Bakı-Zabrat yolu sağ tərəf Tel:555-50-83",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 35,
    position: { lat: 40.4718, lng: 50.10465 },
    title:
      "Xəzər rayonu, Mərdəkan Ş.T.Q, Mərdəkan-Qala yol ayrıcının cənub-qərb hissəsi Tel:555-50-81",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 36,
    position: { lat: 40.51693, lng: 50.06012 },
    title:
      "Bakı şəhəri, Xəzər rayonu, Buzovna qəsəbəsi, Maştağa yolu Albalılıq, Abşeron küçəsi 105 Tel:555-15-97",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 37,
    position: { lat: 40.439114723888636, lng: 49.93923978880048 },
    title:
      "Bakı-Aeroport yolunun sağ tərəfində, Sabunçu dairəsi yaxınlığında Tel:450-04-52",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 38,
    position: { lat: 40.4303981, lng: 50.1911831 },
    title: "Abşeron rayonu, 3 saylı zeytun sovxozunun ərazisi. Tel:555-15-96",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
  new google.maps.Marker({
    id: 39,
    position: { lat: 40.44076659325543, lng: 50.01330681145191 },
    title:
      "Bakı ş-ri, Suraxanı r-nu, Yeni Suraxanı Qəsəbəsi, Bakı-Aeroport yolu, 7-ci km, 1 Tel:458-92-43",
    map: map,
    description: "7s Saylı YDM",
    icon: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  }),
];
let markerCluster = new MarkerClusterer(map, markers, {
  gridSize: 50,
  maxZoom: 15,
  zoomOnClick: true,
  minimumClusterSize: 2,
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  styles: [
    {
      textColor: "white",
      textSize: 16,
      url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
      height: 53,
      width: 53,
    },
    {
      textColor: "white",
      textSize: 16,
      url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m2.png",
      height: 56,
      width: 56,
    },
  ],
});

let backSidebar = document.getElementById("back-icon");

google.maps.event.addListener(map, "zoom_changed", function () {
  var zoomLevel = map.getZoom();
  if (zoomLevel < 10) {
    groupMarkers();
  } else {
    addAllSidebarContent();
  }
});

function groupMarkers() {
  // Remove all existing markers from the markerCluster object
  markerCluster.clearMarkers();

  // Add the updated markers to the markerCluster object
  markerCluster.addMarkers(markers);
}

let sidebar = document.getElementById("sidebar");
function addAllSidebarContent() {
  let sidebarContent = '';
  sidebarContent = markers
    .map(
      (marker) => `
  <div id="${marker.id}" class="content" style="cursor:pointer">
                  <p class="go-location"
                    >${marker.getTitle()}</p
                  >
                  <p>${marker.description}</p>
  </div>
`
    )
    .join("");
  sidebar.innerHTML = sidebarContent;
  backSidebar.style.display = "none";

}
addAllSidebarContent();

// Keep track of the currently selected marker
var selectedMarker = null;

function clickSideBarItems() {
  // add event listeners to sidebar items
  document.querySelectorAll(".content").forEach((el) => {
    el.addEventListener("click", () => {
      // Reset the icon of the previously selected marker
      if (selectedMarker !== null) {
        selectedMarker.setIcon(
          "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
        );
      }
      const markerId = el.id;
      const marker = markers.find((m) => parseInt(m.id) === parseInt(markerId));
      // Set the selected marker to the clicked marker

      map.panTo(marker.getPosition());
      map.setZoom(15);
      marker.setAnimation(google.maps.Animation.BOUNCE);
      marker.setIcon("https://maps.google.com/mapfiles/ms/icons/blue-dot.png");
      setTimeout(() => {
        marker.setAnimation(null);
      }, 1500);
      selectedMarker = marker;
      let sidebarContent = '';
      sidebarContent = `
  <div id="${marker.id}" class="content" style="cursor:pointer">
                  <p class="go-location"
                    >${marker.getTitle()}</p
                  >
                  <p>${marker.description}</p>
  </div>
`;
      sidebar.innerHTML = sidebarContent;
      backSidebar.style.display = "block";
    });
  });
}
clickSideBarItems();

backSidebar.addEventListener("click", function back() {
  addAllSidebarContent();
  clickSideBarItems();
  map.setZoom(7);
  map.panTo({ lat: 40.143105, lng: 47.576927 }); 
});

// Add click event listeners to each marker
markers.forEach(function (marker) {
  marker.addListener("click", function () {
    // Reset the icon of the previously selected marker
    if (selectedMarker !== null) {
      selectedMarker.setIcon(
        "https://maps.google.com/mapfiles/ms/icons/red-dot.png"
      );
    }
    map.panTo(marker.getPosition());
    map.setZoom(15);
    marker.setAnimation(google.maps.Animation.BOUNCE);
    marker.setIcon("https://maps.google.com/mapfiles/ms/icons/blue-dot.png");
    setTimeout(() => {
      marker.setAnimation(null);
    }, 1500);

    // Set the selected marker to the clicked marker
    selectedMarker = marker;

    let sidebarContent = '';
    sidebarContent += `
  <div id="${marker.id}" class="content" style="cursor:pointer">
                  <p class="go-location"
                    >${marker.getTitle()}</p
                  >
                  <p>${marker.description}</p>
  </div>
`;
    sidebar.innerHTML = sidebarContent;
    backSidebar.style.display = "block";

  });
});


