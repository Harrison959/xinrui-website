const zones = {
  wuchang: {
    name: "武昌中心", english: "WUCHANG CENTER", status: "active",
    intro: "以鑫恺源驾校总部为服务中心，覆盖武昌核心高校，并延伸服务至汉阳校区。",
    manager: "武昌片区负责人", avatar: "WC",
    schools: [{
      name: "鑫恺源驾校", field: "总部训练场", verified: true,
      campuses: [
        ["湖北大学（武昌校区）", "2.9km"], ["湖北中医药大学昙华林校区", "790m"],
        ["中南财经政法大学首义校区", "2.2km"], ["武汉开放大学（汉阳分校）", "3.1km"],
        ["武汉职业技术大学", "388m"]
      ]
    }]
  },
  guanggu: {
    name: "光谷东站", english: "OPTICS VALLEY EAST", status: "active",
    intro: "鑫恺源驾校东站训练场辐射光谷高校群，方便学生按所在学校快速匹配场地。",
    manager: "光谷东站片区负责人", avatar: "GG",
    schools: [{
      name: "鑫恺源驾校", field: "东站训练场", verified: true,
      campuses: [
        ["华中科技大学文华学院", "待测距"], ["湖北第二师范大学", "待测距"],
        ["华中科技大学", "待测距"], ["武汉体育大学", "待测距"],
        ["武汉工程大学", "待测距"], ["武汉工程大学邮电学院", "待测距"],
        ["长江职业学院", "待测距"]
      ]
    }]
  },
  canglongdao: {
    name: "藏龙岛", english: "CANGLONG ISLAND", status: "active",
    intro: "由藏龙致远驾校服务藏龙岛高校群，集中展示覆盖院校与后续场地资料。",
    manager: "藏龙岛片区负责人", avatar: "CL",
    schools: [{
      name: "藏龙致远驾校", field: "藏龙岛训练基地", verified: true,
      campuses: [
        ["湖北经济学院", "待测距"], ["法商学院", "待测距"],
        ["湖北城市建筑职业学院", "待测距"], ["武汉体育科技职业学院", "待测距"],
        ["武汉光谷职业技术学院", "待测距"], ["外语外事", "待测距"],
        ["湖北美术大学", "待测距"], ["武汉纺织大学外经贸学院", "待测距"],
        ["湖北水利水电职业学院", "待测距"], ["武昌职业学院", "待测距"],
        ["湖北交通职业学院", "待测距"], ["武汉传媒大学", "待测距"],
        ["武汉铁路职业学院", "待测距"], ["武汉软件工程职业学院", "待测距"]
      ]
    }]
  },
  huangjiahu: {
    name: "黄家湖", english: "HUANGJIAHU", status: "active",
    intro: "晨星三侠驾校服务黄家湖高校片区，重点覆盖周边学生日常练车需求。",
    manager: "黄家湖片区负责人", avatar: "HJ",
    schools: [{
      name: "晨星三侠驾校", field: "训练场资料待补充", verified: false,
      campuses: [
        ["湖北中医药大学黄家湖校区", "800m"], ["武汉科技大学黄家湖校区", "2.4km"],
        ["武汉工商学院", "500m"], ["武汉交通职业学院", "3.7km"], ["武汉学院", "5.6km"]
      ]
    }]
  },
  nanhu: {
    name: "南湖", english: "NANHU", status: "active",
    intro: "友佳驾校与湾流驾校共同覆盖南湖高校密集区，方便按学校和距离进行对比。",
    manager: "南湖片区负责人", avatar: "NH",
    schools: [
      {
        name: "友佳驾校", field: "训练场资料待补充", verified: false,
        campuses: [
          ["华中师范大学南湖校区", "400m"], ["武汉理工大学南湖校区", "2.6km"],
          ["武汉工程大学武昌校区", "2.6km"], ["中南民族大学", "3.9km"],
          ["华中师范大学桂子山校区", "900m"], ["中国地质大学", "4km"],
          ["武汉大学", "3km"], ["中南财经政法大学南湖校区", "4.5km"],
          ["武汉纺织大学南湖校区", "4.4km"], ["武汉理工鉴湖校区", "1.8km"],
          ["武汉理工大学马房山校区", "1.3km"]
        ]
      },
      {
        name: "湾流驾校", field: "训练场资料待补充", verified: false,
        campuses: [["华中农业大学", "1.8km"], ["湖北工业大学", "2.8km"]]
      }
    ]
  },
  jiangxia: {
    name: "江夏", english: "JIANGXIA", status: "active",
    intro: "星途驾校与德运驾校作为两个独立合作驾校，后续将分别补充训练场和高校距离。",
    manager: "江夏片区负责人", avatar: "JX",
    schools: [
      { name: "星途驾校", field: "训练场与覆盖高校待补充", verified: false, campuses: [] },
      { name: "德运驾校", field: "训练场与覆盖高校待补充", verified: false, campuses: [] }
    ]
  },
  qinggong: {
    name: "轻工大片区", english: "QINGGONG AREA", status: "active",
    intro: "顺驰驾校服务武汉轻工大学周边，后续可继续扩展常青与金银湖方向高校。",
    manager: "轻工大片区负责人", avatar: "QG",
    schools: [{
      name: "顺驰驾校", field: "训练场资料待补充", verified: false,
      campuses: [["武汉轻工大学", "2.2km"]]
    }]
  },
  tangxunhu: {
    name: "汤逊湖", english: "TANGXUNHU", status: "planned",
    intro: "汤逊湖片区已纳入后续业务规划，合作驾校与训练场信息将在拓展完成后上线。",
    manager: "业务拓展中", avatar: "TX", schools: []
  },
  yangluo: {
    name: "阳逻", english: "YANGLO", status: "planned",
    intro: "阳逻片区已纳入后续业务规划，合作驾校与训练场信息将在拓展完成后上线。",
    manager: "业务拓展中", avatar: "YL", schools: []
  }
};

const intro = document.querySelector("#intro");
const site = document.querySelector("#site");

function enterSite() {
  site.classList.add("visible");
  intro.classList.add("exit");
  document.body.classList.remove("intro-active");
  try { sessionStorage.setItem("xinrui-intro-seen", "1"); } catch (_) {}
  window.setTimeout(() => { intro.hidden = true; }, 1300);
}

document.querySelector("#enterSite").addEventListener("click", enterSite);
document.querySelector("#skipIntro").addEventListener("click", enterSite);

const params = new URLSearchParams(location.search);
let introSeen = false;
try { introSeen = Boolean(sessionStorage.getItem("xinrui-intro-seen")); } catch (_) {}
if (params.has("skipIntro") || introSeen) {
  intro.hidden = true;
  site.classList.add("visible");
  document.body.classList.remove("intro-active");
}

let activeZoneKey = "wuchang";
let areaOpenedByPush = false;
const regionSection = document.querySelector("#regions");
const areaDirectory = document.querySelector("#areaDirectory");
const advantagesSection = document.querySelector("#advantagesSection");

const advantageDetails = {
  near: {
    index: "01",
    title: "离校更近",
    description: "利用没课、周末和考试周后的空闲时间练车，不必为了练车专门跨区往返。"
  },
  clear: {
    index: "02",
    title: "收费透明",
    description: "报名前讲清费用由谁收取、包含哪些项目，也说明后续可能发生的考试与模拟费用。"
  },
  fit: {
    index: "03",
    title: "班型匹配",
    description: "结合学生的预算、学习能力和时间安排推荐方案，不用低价吸引后再不断增加项目。"
  },
  steady: {
    index: "04",
    title: "全程有人负责",
    description: "预约、练车、教练沟通和考试安排出现问题时，有明确片区负责人继续协调处理。"
  }
};

function setAdvantageFocus(key) {
  const detail = advantageDetails[key];
  if (!detail) return;
  document.querySelectorAll("#advantageKeywords [data-advantage]").forEach(button => {
    button.classList.toggle("active", button.dataset.advantage === key);
  });
  const focus = document.querySelector(".value-focus");
  focus.classList.remove("refresh");
  void focus.offsetWidth;
  document.querySelector("#advantageIndex").textContent = detail.index;
  document.querySelector("#advantageTitle").textContent = detail.title;
  document.querySelector("#advantageDescription").textContent = detail.description;
  focus.classList.add("refresh");
}

function setAdvantageScene(scene) {
  const target = scene === "campus" ? "campus" : "value";
  advantagesSection.dataset.scene = target;
  document.querySelectorAll("[data-advantage-scene]").forEach(panel => {
    panel.classList.toggle("is-active", panel.dataset.advantageScene === target);
  });
  document.querySelectorAll("[data-advantage-target]").forEach(button => {
    button.classList.toggle("active", button.dataset.advantageTarget === target);
  });
  document.querySelector("#advantageProgress").textContent = target === "value" ? "01" : "02";
}

function openAdvantages(scene = "value") {
  setAdvantageScene(scene);
  advantagesSection.classList.add("open");
  advantagesSection.setAttribute("aria-hidden", "false");
  document.body.classList.add("advantages-open");
  window.setTimeout(() => document.querySelector("#closeAdvantages").focus({ preventScroll: true }), 520);
}

function closeAdvantages() {
  advantagesSection.classList.remove("open");
  advantagesSection.setAttribute("aria-hidden", "true");
  document.body.classList.remove("advantages-open");
}

function selectZone(key) {
  const zone = zones[key];
  if (!zone) return;
  activeZoneKey = key;
  document.querySelectorAll(".zone-list [data-zone], .map-node[data-zone]").forEach(el => el.classList.toggle("active", el.dataset.zone === key));
  document.querySelector("#mapZoneName").textContent = zone.name;
  document.querySelector("#regionName").textContent = zone.name;
  document.querySelector("#regionIntro").textContent = zone.intro;
  document.querySelector("#regionStatus").textContent = zone.status === "planned" ? "业务拓展中" : "已开展服务";
  document.querySelector("#schoolCount").textContent = String(zone.schools.length).padStart(2, "0");
  document.querySelector("#managerName").textContent = zone.manager;
  document.querySelector("#managerAvatar").textContent = zone.avatar;
  regionSection.classList.toggle("is-planned", zone.status === "planned");
  renderSchools(zone);
  const coachScene = document.querySelector("#coachDriveScene");
  if (coachScene) {
    coachScene.dataset.zone = key;
    coachScene.classList.remove("zone-shift");
    void coachScene.offsetWidth;
    coachScene.classList.add("zone-shift");
  }
}

function renderAreaDirectory() {
  document.querySelector("#areaDirectoryGrid").innerHTML = Object.entries(zones).map(([key, zone], index) => {
    const campusCount = zone.schools.reduce((total, school) => total + school.campuses.length, 0);
    const schoolNames = zone.schools.length ? zone.schools.map(school => school.name).join(" · ") : "合作驾校筹备中";
    return `<button class="directory-card ${zone.status === "planned" ? "planned" : ""}" data-zone="${key}" type="button">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <em>${zone.status === "planned" ? "拓展中" : "已开展"}</em>
      <h3>${zone.name}</h3>
      <p>${schoolNames}</p>
      <div><b>${zone.schools.length || "—"}<small> 驾校</small></b><b>${campusCount || "—"}<small> 高校</small></b><i>↗</i></div>
    </button>`;
  }).join("");
}

function openAreaDirectory() {
  areaDirectory.classList.add("open");
  areaDirectory.setAttribute("aria-hidden", "false");
  document.body.classList.add("directory-open");
  window.setTimeout(() => document.querySelector("#closeAreaDirectory").focus({ preventScroll: true }), 480);
}

function closeAreaDirectory() {
  areaDirectory.classList.remove("open");
  areaDirectory.setAttribute("aria-hidden", "true");
  document.body.classList.remove("directory-open");
}

function openRegion(key, pushHistory = true) {
  if (!zones[key]) return;
  selectZone(key);
  regionSection.classList.add("open");
  regionSection.setAttribute("aria-hidden", "false");
  document.body.classList.add("region-open");
  if (pushHistory) {
    history.pushState({ area: key }, "", `${location.pathname}${location.search}#area/${key}`);
    areaOpenedByPush = true;
  }
  window.setTimeout(() => document.querySelector("#closeRegion").focus({ preventScroll: true }), 720);
}

function closeRegion(updateHistory = true) {
  regionSection.classList.remove("open");
  regionSection.setAttribute("aria-hidden", "true");
  document.body.classList.remove("region-open");
  if (!updateHistory) return;
  if (areaOpenedByPush) {
    areaOpenedByPush = false;
    history.back();
  } else if (location.hash.startsWith("#area/")) {
    history.replaceState(null, "", `${location.pathname}${location.search}`);
  }
}

function renderSchools(zone) {
  const directory = document.querySelector("#schoolDirectory");
  if (zone.status === "planned") {
    directory.innerHTML = `<article class="expansion-card"><span>FUTURE SERVICE AREA</span><h3>${zone.name}业务拓展中</h3><p>我们正在完善当地训练场与合作驾校资料。正式落地后，这里将展示场地、覆盖高校及片区负责人。</p><i>${zone.english}</i></article>`;
    return;
  }

  directory.innerHTML = zone.schools.map((school, index) => {
    const campuses = school.campuses.length
      ? school.campuses.map(([name, distance]) => `<li><span>${name}</span><em class="${distance === "待测距" ? "pending" : ""}">${distance}</em></li>`).join("")
      : "<li class=\"empty-campus\"><span>覆盖高校与距离正在整理</span><em class=\"pending\">待补充</em></li>";
    return `<article class="school-card">
      <div class="school-card-head">
        <div><span>${String(index + 1).padStart(2, "0")} · PARTNER SCHOOL</span><h3>${school.name}</h3></div>
        <i class="${school.verified ? "verified" : "pending"}">${school.verified ? "场地已确认" : "资料待补充"}</i>
      </div>
      <div class="field-name"><small>TRAINING FIELD</small><b>${school.field}</b></div>
      <div class="campus-head"><span>周边高校</span><em>${school.campuses.length} CAMPUS</em></div>
      <ul class="campus-list">${campuses}</ul>
      <button class="school-contact" type="button">联系${zone.name}负责人 <i>↗</i></button>
    </article>`;
  }).join("");
}

document.querySelectorAll(".zone-list [data-zone]").forEach(button => button.addEventListener("click", () => openRegion(button.dataset.zone)));
document.querySelectorAll(".map-node[data-zone]").forEach(node => {
  node.addEventListener("click", () => openRegion(node.dataset.zone));
  node.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openRegion(node.dataset.zone);
    }
  });
});

document.querySelector("#openSelectedZone").addEventListener("click", () => openRegion(activeZoneKey));
document.querySelector("#enterCurrentZone").addEventListener("click", openAreaDirectory);
document.querySelector("#openAdvantages").addEventListener("click", () => openAdvantages("value"));
document.querySelector("#navOpenAdvantages").addEventListener("click", () => openAdvantages("value"));
document.querySelector("#navOpenAreas").addEventListener("click", openAreaDirectory);
document.querySelector("#headerConsult").addEventListener("click", () => {
  openRegion(activeZoneKey);
  window.setTimeout(focusManager, 760);
});
document.querySelector("#closeRegion").addEventListener("click", () => closeRegion());
document.querySelector("#switchRegion").addEventListener("click", openAreaDirectory);
document.querySelector("#closeAreaDirectory").addEventListener("click", closeAreaDirectory);
document.querySelector("#closeAdvantages").addEventListener("click", closeAdvantages);
document.querySelector("#advantageKeywords").addEventListener("click", event => {
  const button = event.target.closest("[data-advantage]");
  if (button) setAdvantageFocus(button.dataset.advantage);
});
document.querySelectorAll("[data-advantage-target]").forEach(button => {
  button.addEventListener("click", () => setAdvantageScene(button.dataset.advantageTarget));
});
document.querySelector("#advantagesOpenAreas").addEventListener("click", () => {
  closeAdvantages();
  openAreaDirectory();
});
document.querySelector("#areaDirectoryGrid").addEventListener("click", event => {
  const card = event.target.closest(".directory-card");
  if (!card) return;
  const key = card.dataset.zone;
  if (regionSection.classList.contains("open")) {
    selectZone(key);
    history.replaceState({ area: key }, "", `${location.pathname}${location.search}#area/${key}`);
    closeAreaDirectory();
  } else {
    closeAreaDirectory();
    openRegion(key);
  }
});

function focusManager() {
  const managerCard = document.querySelector(".manager-card");
  managerCard.scrollIntoView({ behavior: "smooth", block: "center" });
  managerCard.classList.remove("attention");
  void managerCard.offsetWidth;
  managerCard.classList.add("attention");
}

document.querySelector("#schoolDirectory").addEventListener("click", event => {
  const button = event.target.closest(".school-contact");
  if (!button) return;
  focusManager();
});
document.querySelector(".region-consult").addEventListener("click", focusManager);

const hashZoneKey = location.hash.startsWith("#area/") ? location.hash.slice(6) : "";
const initialZoneKey = zones[hashZoneKey] ? hashZoneKey : (zones[params.get("zone")] ? params.get("zone") : "wuchang");
renderAreaDirectory();
selectZone(initialZoneKey);
if (zones[hashZoneKey]) requestAnimationFrame(() => openRegion(hashZoneKey, false));
else if (params.get("view") === "areas") requestAnimationFrame(openAreaDirectory);
else if (params.get("view") === "advantages") requestAnimationFrame(() => openAdvantages(params.get("scene")));

window.addEventListener("popstate", () => {
  closeAreaDirectory();
  closeAdvantages();
  const key = location.hash.startsWith("#area/") ? location.hash.slice(6) : "";
  areaOpenedByPush = false;
  if (zones[key]) openRegion(key, false);
  else closeRegion(false);
});

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (areaDirectory.classList.contains("open")) closeAreaDirectory();
  else if (regionSection.classList.contains("open")) closeRegion();
  else if (advantagesSection.classList.contains("open")) closeAdvantages();
});

const mapPanel = document.querySelector(".map-panel");
const coachCar = document.querySelector(".coach-car-render");
if (mapPanel && coachCar && matchMedia("(pointer:fine)").matches) {
  mapPanel.addEventListener("pointermove", event => {
    const rect = mapPanel.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - .5;
    const y = (event.clientY - rect.top) / rect.height - .5;
    coachCar.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
    coachCar.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
  });
  mapPanel.addEventListener("pointerleave", () => {
    coachCar.style.setProperty("--tilt-y", "0deg");
    coachCar.style.setProperty("--tilt-x", "0deg");
  });
}

document.addEventListener("mousemove", event => {
  if (intro.hidden) return;
  const x = (event.clientX / innerWidth - .5) * 12;
  const y = (event.clientY / innerHeight - .5) * 12;
  document.querySelector(".intro-stage").style.transform = `translate(${x}px, ${y}px)`;
});
