export type TeamMember = {
  name: string;
  roleKeys: string[];
  focusKey?: string;
  groupKey: string;
  image: string;
  contact: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Thomas Giroux",
    roleKeys: ["team.roles.drive_systems"],
    focusKey: "team.focus.thomas_giroux",
    groupKey: "team.groups.electrical_control",
    image: "/assets/team/ThomGiroux.jpg",
    contact: "thomas.giroux3@usherbrooke.ca"
  },
  {
    name: "Maxime Boucher",
    roleKeys: ["team.roles.thermal_systems"],
    focusKey: "team.focus.maxime_boucher",
    groupKey: "team.groups.electrical_control",
    image: "/assets/team/MaxBoucher.jpg",
    contact: "maxime.boucher5@usherbrooke.ca"
  },
  {
    name: "Alexandre Blais",
    roleKeys: ["team.roles.ecu_control_systems"],
    focusKey: "team.focus.alexandre_blais",
    groupKey: "team.groups.electrical_control",
    image: "/assets/team/AlexBlais.jpg",
    contact: "alexandre.blais6@usherbrooke.ca"
  },
  {
    name: "Renaud Gagnon",
    roleKeys: ["team.roles.mechatronics_designer", "team.roles.photographer"],
    focusKey: "team.focus.renaud_gagnon",
    groupKey: "team.groups.electrical_control",
    image: "/assets/team/RenaudGagnon.jpg",
    contact: "renaud.gagnon@usherbrooke.ca"
  },
  {
    name: "Zachary Rodrigue",
    roleKeys: ["team.roles.data_acquisition_active_aero"],
    focusKey: "team.focus.zachary_rodrigue",
    groupKey: "team.groups.electrical_control",
    image: "/assets/team/ZacharyRodrigue.jpg",
    contact: ""
  },
  {
    name: "Julien Lafleche",
    roleKeys: ["team.roles.ecu_battery_systems"],
    focusKey: "team.focus.julien_lafleche",
    groupKey: "team.groups.electrical_control",
    image: "/assets/team/JulienLafleche.jpg",
    contact: "julien.lafleche@usherbrooke.ca"
  },
  {
    name: "William Roy",
    roleKeys: [
      "team.roles.mentor",
      "team.roles.rider",
      "team.roles.mechanical_engineer"
    ],
    focusKey: "team.focus.william_roy",
    groupKey: "team.groups.mechanical_powertrain",
    image: "/assets/team/WillRoy.jpg",
    contact: ""
  },
  {
    name: "Loic Langlois",
    roleKeys: ["team.roles.structural_engineer"],
    focusKey: "team.focus.loic_langlois",
    groupKey: "team.groups.mechanical_powertrain",
    image: "/assets/team/LoicLanglois.jpg",
    contact: "loic.langlois2@usherbrooke.ca"
  },
  {
    name: "Emile Raymond",
    roleKeys: ["team.roles.powertrain_dyno_engineer"],
    focusKey: "team.focus.emile_raymond",
    groupKey: "team.groups.mechanical_powertrain",
    image: "/assets/team/EmileRaymond.jpg",
    contact: ""
  },
  {
    name: "Felix Jacques",
    roleKeys: ["team.roles.dyno_systems"],
    focusKey: "team.focus.felix_jacques",
    groupKey: "team.groups.electrical_control",
    image: "/assets/team/FelixJacques.jpg",
    contact: ""
  },
  {
    name: "Jeremy Marcoux",
    roleKeys: ["team.roles.drive_rider_interface"],
    focusKey: "team.focus.jeremy_marcoux",
    groupKey: "team.groups.electrical_control",
    image: "/assets/team/JeremyMarcoux.jpg",
    contact: ""
  },
  {
    name: "Alexandre Giguere",
    roleKeys: ["team.roles.cooling_aerodynamics"],
    focusKey: "team.focus.alexandre_giguere",
    groupKey: "team.groups.aero_vehicle",
    image: "/assets/team/AlexGiguere.jpg",
    contact: ""
  },
  {
    name: "Philippe Gariepy",
    roleKeys: ["team.roles.structural_design"],
    focusKey: "team.focus.philippe_gariepy",
    groupKey: "team.groups.mechanical_powertrain",
    image: "/assets/team/PhilippeGariepy.jpg",
    contact: "philippe.gariepy2@usherbrooke.ca"
  },
  {
    name: "Nicolas Bernard",
    roleKeys: ["team.roles.structure_aerodynamics"],
    focusKey: "team.focus.nicolas_bernard",
    groupKey: "team.groups.mechanical_powertrain",
    image: "/assets/team/placeholder-avatar-emus.jpg",
    contact: ""
  },
  {
    name: "Manuel Gaudreault",
    roleKeys: ["team.roles.aerodynamics"],
    focusKey: "team.focus.manuel_gaudreault",
    groupKey: "team.groups.aero_vehicle",
    image: "/assets/team/ManuelGaudreault.jpg",
    contact: ""
  },
  {
    name: "Charles-Eric Blais",
    roleKeys: ["team.roles.aerodynamics"],
    focusKey: "team.focus.charles_eric_blais",
    groupKey: "team.groups.aero_vehicle",
    image: "/assets/team/placeholder-avatar-emus.jpg",
    contact: ""
  },
  {
    name: "Guillaume Dion",
    roleKeys: ["team.roles.structural_designer"],
    groupKey: "team.groups.mechanical_powertrain",
    image: "/assets/team/placeholder-avatar-emus.jpg",
    contact: "guillaume.dion3@usherbrooke.ca"
  },
  {
    name: "Aimeric Bouillon",
    roleKeys: ["team.roles.dyno_systems"],
    groupKey: "team.groups.mechanical_powertrain",
    image: "/assets/team/placeholder-avatar-emus.jpg",
    contact: "aimeric.bouillon@usherbrooke.ca"
  },
  {
    name: "Alexandre Roy",
    roleKeys: ["team.roles.data_logging_integrator"],
    groupKey: "team.groups.electrical_control",
    image: "/assets/team/placeholder-avatar-emus.jpg",
    contact: "alexandre.roy14@usherbrooke.ca"
  },
  {
    name: "Aymrik Rodrigue",
    roleKeys: ["team.roles.marketing_communications"],
    focusKey: "team.focus.aymrik_rodrigue",
    groupKey: "team.groups.race_outreach",
    image: "/assets/team/placeholder-avatar-emus.jpg",
    contact: ""
  },
  {
    name: "Émilie Veilleux",
    roleKeys: ["team.roles.marketing_communications"],
    focusKey: "team.focus.emilie_veilleux",
    groupKey: "team.groups.race_outreach",
    image: "/assets/team/EmilieVeilleux.jpg",
    contact: ""
  }
];
