'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "71471aa22f512be4eec99f398170733e",
".git/config": "507e6cbb7ba6b10f1b2af9bce8ce49ca",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "eee4ed52cc8a075ab584fd05e795356f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dc0757828b0866771eae1c4f52674eac",
".git/logs/refs/heads/main": "cc638cb61aa84b0ff5b128b17f22e42f",
".git/logs/refs/remotes/origin/main": "c43e999fd20d38c265d6818c4907958b",
".git/objects/04/36876369c86039667ed6e8f934d903b740b2d9": "7c424be246b704b7748d12576c323f61",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/12/b5b653430741d19edacee35c6aa3d51cfdc40e": "e5d513a130e436cd38cbb3c10e5c7410",
".git/objects/13/09dc8517995a065a8c3b36e14ff5a05781c0a7": "85d9db3b822a54123c12b672e55aae63",
".git/objects/13/7d6fc15cd105851bbb5d73db6698c810a4bc1d": "1576073facb75e366729aad2e4da25e7",
".git/objects/13/bb4c0f0ac9f4e69ff4ba864fc68f76fc4ac93a": "8ae3012f066a0b3f43615f90c7f04c41",
".git/objects/14/1ea925676e3398f2bb9d7a613622b0cc1cc1d1": "5f1756da3139aedc1b2fc6269ea0b681",
".git/objects/14/7fa66a2a27bef4da8c7dfe9e5a61846f5743fe": "34d21fde1c90e816e2c655c533f152f7",
".git/objects/18/353139e4ebe07fcfc2c6bf66446d5ecfe54a35": "e526023eb64b7d903fb14faac39e2e3a",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/e16c4df26addfa22866e0a08ff38a7249ee5a7": "a3a6352a949631d8a5ba3be919895b35",
".git/objects/21/119c76e1d364e3b9d72d7aac606a30f13abf20": "31cf2ac0b109a962b2723521efea9118",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/8bbc28933a07c144581a3504e83ae75a584477": "d2b430fbe0488a8e7be09a9c2ecede49",
".git/objects/29/901bc6228e4b7c841a511f3407806527779f50": "d63ecc222253d1ca62248b4f2abb4203",
".git/objects/2f/4afe9c0cf324182e6d84dbf10119fa7d3c498d": "3030ef22ca21e8bfe418daf8ed1f8a7a",
".git/objects/36/0cdd870863f0db4f6f78fe5349bdd7a4f56af5": "655ac3c6a5eab3b0a821582a3f0a9532",
".git/objects/3a/454b9b45bc0450dd6e82feb8e39a43a1a472a6": "1418b403599ccd4dedddd2deaab99fb2",
".git/objects/3a/79ea52b52d3e96e3511c4292ec17c3396bbd4f": "2d7212a775c1b6f10ee3ea72ce6d66db",
".git/objects/3b/6e6e8413a1c56489314d303fb51dc76f297c0d": "f2aefacb92ad764bd51844169f265545",
".git/objects/3d/0b1a4f27d0e8bb79c9e80b9c82f20ab3ddc3ea": "e20f1dfd1400164e2fe85a336abf5b30",
".git/objects/41/3ae2d1e256475d37f9bf96acdca26a2a535727": "fb00bf7c7a91358108cb7489a05da959",
".git/objects/4b/a90ddd513c10284ca7402ea4c33862a32905bd": "43fc212d73b9996e09569280c7c7bd30",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4e/e48ce3779a8eb18c8926609f0a51a0b7b5043e": "2302863a6b466a8e0accbf67f2023e2b",
".git/objects/4f/cde9a57dc7429f92f03ffd1d97f420249677e3": "f46165516a225729937ae342e71f9b7b",
".git/objects/52/f86c7abe50af62abb1ad84a54a7e30704a8d98": "70f87525bc6bbf27d2bdc317dd437b10",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/59/cc0d09b247e979c8eb8031ee713f0a7770c02c": "b25304f07188477061e2bafe457677d3",
".git/objects/59/cee969d4663e21e87a0bae6bfd260e0bdc89dc": "2cf2815c359b1f5647b92353847d3b75",
".git/objects/59/f240a92961a5e30a8395a9dede53eb20bd159d": "a39c77334ba3775e23aef66e753c7dfc",
".git/objects/5e/bf37944a56f2b5e479e3858392c6e9030da2da": "d874f5ce1eb6512c7b77ebd17b676f00",
".git/objects/66/c8bf93fb8bbdef8973b7855eb130f30f45c69a": "91904cd96c164484618b70273ce790d3",
".git/objects/68/16b9b9cf6dc935ae0aa2d9f5f6c01853cef31c": "f60c701edd6b270857f573151fc7a38e",
".git/objects/68/41774df26636ccb79973ab87997a3a78507d71": "7872a09825de4e1b3e8a8d33906e9357",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/71/35903d983722906800431e6ecd349b5311bb10": "dd76dcc4df52892fe67bdef5d3d41c03",
".git/objects/71/3f7c7f155005cbb1e190aa3e36fde133aa3592": "1ccc0b8a166a450419eae8d3d2839e63",
".git/objects/73/3d05357da4a16c4ca4da7c7ae0a6a79856b5f6": "7c226024d64dbeea2589a76546e6d076",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/e1a55094acd409b4df7e10e2140c3006d88515": "f52ce3d060fe0f839ff9c9276ccedf11",
".git/objects/76/5f600f36b5bf84598a976836bf8e421b5bf7a5": "a291e5bed770c92a1552871e51e3fb92",
".git/objects/78/69fdeda095e01b989d8722024bed205c383e65": "80c65f9a21581e8ab69f28575a7f9491",
".git/objects/79/effaf29c637edd71a880b02a14100d7b7e7658": "dc5493e2670e597d98b6a05169377022",
".git/objects/7b/8753f19ae52e36a6295d7ac6386f5a53a704c9": "6b3138c275f9503b6a4d3cca86b36442",
".git/objects/7c/8dfa4de403cec474b5833f935cb9c54369b59c": "8a42a4b5bf24a6f98fac7ae3f83a1680",
".git/objects/7f/4b361e06fb227ce4179cb2e870d81dc7994c2a": "1de124845dbe6cf91e25deee26c3b576",
".git/objects/82/e2b64c04199b9f2c887493e9e5110f175bff8a": "4ce53d5cda27131b1a970dd990d5749f",
".git/objects/85/173254fb08ac2307f5903b047e8780e6c97995": "2a7405dbe5ed4ed5d347b0f4a3d1476e",
".git/objects/88/4da6afbd290da4f96749b0ff331bd7085710c8": "478861f93c3466c531510944a8143703",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/14e220ed2da20bc434424a6993940747f792b9": "54edbcac291aea1b30714fbf995e4142",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8e/f1c3cfe2a60f597adb6c59d67f3e81894d60cd": "934e8f1f89dd26a681357c71182ffdbd",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/9ba0322c7d456053f23f39214ac1e2ca808ebb": "9ddd58d7873b94a33f6561beba5446dd",
".git/objects/a0/4ff2681078fb2b15ef608bf79bc6aff5c68a16": "ad5fb462d5dd1e41c5aa9574fdbad9aa",
".git/objects/a0/eacd46b6fed6a4cefd6242728d4fb8fb01459a": "31f447585515b52af8da8db26224931f",
".git/objects/a4/df9438414043abfea25f1d70444ff1b58d0c7d": "c225da9d8df672f97bb89f45ad65b68a",
".git/objects/a5/9c9d94190181a85e76be8ccca4c57d49f7a3ab": "61159b945b1213c68c35fae440078177",
".git/objects/a6/4166feddf0a7e2ec22de889313a1b05254cddd": "6ffbdfdd7a9493cca39a2b41c03bf2a8",
".git/objects/ab/eb125708d6c146a3afb2f02388d1d536c46a71": "3a4a861a83ac665acf8ad0321aac73b9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2004e8491c5ae2d3522d10655ef9099a2fae65": "76155d84617f4a494d0074f6f2e689e2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/b9/e3a5c309bc97410522df5e60772582bdb1b1e5": "81825410217f6d88314891807206e4b7",
".git/objects/ba/11fa7ac9530979196de8882e19ed1cec096f2e": "a3ce1e7288c0027fe6441b59db6e3b49",
".git/objects/ba/1c7b73136c5e31a7e827064fd24a36e7a0b7eb": "e275c5b9426857c9452d5a924c42a694",
".git/objects/bb/ab49cc63fae0919e1254f318041d0dfe7f4197": "34defd35208c5bfd32f3b13481bb09a5",
".git/objects/bc/ef1fc3440e760413d830ac04ca8facdf22d336": "6f21577cc169d275fa6f82216b7bae9e",
".git/objects/bd/54e28f082a316330c410ace6bb248d2deee6a7": "342dfbcc65c52f233aebc6676da57a81",
".git/objects/bd/9a7bc5c7f87648a8d553c76cd21946872158aa": "0e26975a3c780737c3c1ddea0ad3ba7e",
".git/objects/bf/5aea8db0644c4cafd4744b8a1125f0fb8ce80c": "a27f3aed139bf81b130a311484fa2554",
".git/objects/c6/00df17ef71867dfdcd7cba8713630bdc5e06cb": "3bbfb1c754e184c7dac4cecc183d9ded",
".git/objects/c6/5e9ee371a7b79b770569c417c8a67f85cb5526": "171bb08242295b73aca793d145b51029",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ca/160f725f6350451b9c3e6eab8a1610844289f2": "31a5050763909636739fde63c05af111",
".git/objects/cb/36c6ee4bfec0013bc5387f5cb85eb4329c81ec": "870fb943d2694c1b4a6333f10043624e",
".git/objects/cb/a99b81513c70890ad1bd99f3531d993f5344d7": "c16d1e692c5f7605b72dad3f76c02d5e",
".git/objects/ce/a3497e12b5908848a283372060ffa0e10274a4": "377baaceb70584882eb8a21b048ca920",
".git/objects/ce/e3c5bb4ad9ca1b7e02e3391cc1cbba998308b7": "8e23cc0d8eea61c17a30b19ec3ccb417",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/dc54c7aac64c8b4f5280de2e8248d4259c8e73": "0bdc7bbc8f058d00d3bc62d163e3494f",
".git/objects/d8/605bca14a8db4efa1a2eeb682792204c9df500": "b1d06c92849d16d8dc5b57f9771b9d3c",
".git/objects/db/2b91a95ea86be60295c510a293a37aede0664d": "f3d77796631b138766d45f809ff53eb4",
".git/objects/db/dd2750145ca7449282aba45ab73e648e220cd4": "488e53d80ab3a24ecf1d5044c68427e0",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dc/323571d98a14311f80b52be31b4f4243354e3c": "cbdd0284f0826d94a110a267307e7191",
".git/objects/de/5af9828c460f1a8510555b1eb22ff196a7892b": "72d56818adc591e1319e04a46134c806",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e0/d93f696ae1367bdc27a453a7a1649a0974f728": "76bc2052cb8628f4f92a5c4872ad52d3",
".git/objects/e4/4aa3dd54f08c04877f4f5817f5d79901fb6bdd": "127e44901be86a288f4aeb6226ecf6d3",
".git/objects/e6/a427a26c21403a918022b125509a7819b87ee2": "3ead33f17e19811b15d1dde85b71c934",
".git/objects/e9/0f876291872717a31253f6e01c4d2cb7f834f3": "c705c8332e9837a1409d59489bb571b3",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/9070a4b42224c0918ff771d2b7cd3b6f5faea2": "22beee233ca54e6dd6e581f862f6f6aa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/c68822184f8b019ba2ab0ee5877a3f151c07c3": "d5887f72cc8668c74f81f0b2ffa6b135",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/618a9a017d61521afe248fd6d2e53dd4cda9d7": "623a98f1b645a6d978091bae9299fa12",
".git/objects/fc/444a32a3e47e64cab92530eecac445decb1a9b": "439c445906d7d40dd1863c98d27bb920",
".git/objects/fd/894122f2c89a1d4e7334903df6174b0b97e279": "11cca27a6d92083d83a43f436d8d31a7",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "4c1587955cdcf6e2e830a306e4d31b65",
".git/refs/remotes/origin/main": "4c1587955cdcf6e2e830a306e4d31b65",
"assets/AssetManifest.bin": "eb92e2d89f2ebb90af56e87b1d2d1987",
"assets/AssetManifest.bin.json": "90c6e2aa90ecc4c882d945bc61f7dd22",
"assets/AssetManifest.json": "13e15a2f458903082a87186c913feba2",
"assets/assets/calliverse.png": "fad974d5887e0c5a89aa41b5361bb406",
"assets/assets/calliverse1.png": "8bfab764fa537586438fe0341d3767b7",
"assets/assets/calliverse10.png": "0e11a469765663cccdb06dbe0a777e7e",
"assets/assets/calliverse11.png": "e2f0f3bd5e330876c8d24600a7e83e8b",
"assets/assets/calliverse12.png": "8d0b6bf65d73eefdefd463ec04b233cd",
"assets/assets/calliverse13.png": "4a5b9dd433a72115e4749fd0066c6e2c",
"assets/assets/calliverse14.png": "1e34b06c87a430d4c20063ab8e66e2ec",
"assets/assets/calliverse15.png": "cb83f7b5808865d7292e8b10d36b941c",
"assets/assets/calliverse16.png": "4ca732a929d231277ce8fdb523e9a063",
"assets/assets/calliverse2.png": "112826ae29f15f410acd5f5618b4e87e",
"assets/assets/calliverse3.png": "79557dfd393e3b310bfc20b6e0688e07",
"assets/assets/calliverse4.png": "f7cd3da82188e7b92cb782af04c1046a",
"assets/assets/calliverse5.png": "3df85bc743f9056f966fced43920d2ad",
"assets/assets/calliverse6.png": "2841a4a41f267be1d0e565d9c15055e0",
"assets/assets/calliverse7.png": "88eae863f53cd49a4c9e467038153561",
"assets/assets/calliverse8.png": "3233cd4c4272b915ef6c4ee9cb88ee1e",
"assets/assets/calliverse9.png": "bc7fff4dfa3f86f11c08b9b7acd57872",
"assets/assets/ecom.png": "be2285018285e36b13b31cf410838f49",
"assets/assets/ecom1.png": "2ac597ae3cc22bd01264223b785e7efb",
"assets/assets/ecom10.png": "17503e9448e42633d53cff3f464569ae",
"assets/assets/ecom11.png": "df2a1f14dbf0e075bbc0e236c06852a4",
"assets/assets/ecom12.png": "2b2565305093c0ee0ce500de10741098",
"assets/assets/ecom13.png": "4d88a1d3580f6d80f56783eba8cd369c",
"assets/assets/ecom14.png": "56518f26ec0503743174a1bd3bf46cb2",
"assets/assets/ecom2.png": "920b6be68bb980f6ab27b075c9752589",
"assets/assets/ecom3.png": "245d37e51544995b9be76935afdc7c27",
"assets/assets/ecom4.png": "a5f9067c282c6562381c820ae331b13a",
"assets/assets/ecom5.png": "6249293d0b4a95c8b28925690d613324",
"assets/assets/ecom6.png": "d3adba7654d5313579d1b7a660a5ac88",
"assets/assets/ecom7.png": "0026dfb801d614b4b008bae4014fe130",
"assets/assets/ecom8.png": "74043aedfafbfdc7bd3832af87ff6cfd",
"assets/assets/ecom9.png": "4aa5a2965441c49f2523afa32b587ce2",
"assets/assets/fitness.png": "01b623ee10cebad4f35a9ee1d001f03f",
"assets/assets/fitness1.png": "311196d15e01a5f19bd455757bb40d45",
"assets/assets/fitness10.png": "d38ad9f360cf4bcacdad9ec271d2e3a9",
"assets/assets/fitness11.png": "aa9ccf6084d86629d1be27bda2bb24d5",
"assets/assets/fitness12.png": "e5863e2da2ba7d55e903d2ca6e5c825a",
"assets/assets/fitness13.png": "ac491377c576f8ce378aa6070e099aa4",
"assets/assets/fitness14.png": "4101aff56a060ca0d0e935a18e9d5ec3",
"assets/assets/fitness15.png": "11a4aa90fcdea65442ccc86064396f1c",
"assets/assets/fitness2.png": "0ec2b30194d1d70e88b7da8a20bb53db",
"assets/assets/fitness3.png": "2b4ccf3724c8c9a92f871ec46c893608",
"assets/assets/fitness4.png": "cbf529e0bc692e06cd5aae114afe37e9",
"assets/assets/fitness5.png": "7ee99372e8c4d72f04cbe5a182124826",
"assets/assets/fitness6.png": "c4969641cd411e7b23304521b6da7e1c",
"assets/assets/fitness7.png": "6aa1e2294131ad295da6c4797de593b2",
"assets/assets/fitness8.png": "87b9daff84c9be90c2475267bf8fd472",
"assets/assets/fitness9.png": "acf1e21a447aff5cfc0cf92996889890",
"assets/assets/github.png": "1d149697be686317920fff4e51d1b439",
"assets/assets/profile.jpeg": "bbaadc485f9ac662f0ddd2cbc8efa848",
"assets/assets/RESUME.pdf": "fd957b5ea22c5a1d3a3b9dca33b1280b",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "854a25bccdfcac109af10b1ef13f6cfc",
"assets/NOTICES": "d82bb882ff2a424e92b1231b9211efaf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "cdfb02dea76c7baa84be0f84d2214927",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a7e988a528724fef9bdc060fcea3f423",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a42ca11ab45f0471e9b05bcc8f664754",
"/": "a42ca11ab45f0471e9b05bcc8f664754",
"main.dart.js": "8a4e45f8830b9a5a78cc324c06f46e1d",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
