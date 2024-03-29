function body(){
	strokeWeight(3);
	stroke("#513131");
	line(0, 60, 0, -40);
	line(0, -40, 20, - 110);
	line(0, -40, -20, - 110);
	strokeWeight(0);
	fill("#9E7881");
	ellipse(20, -110, 5, 20);
	ellipse(-20, -110, 5, 20);
}
function leftWing(){	
	fill("#70162C");
	beginShape();
	vertex(0.2, 0);
	bezierVertex(3.7, -23.833, 11.917, -47.833, 24.85, -72);
	bezierVertex(27.783, -77.533, 30.983, -83.083, 34.45, -88.65);
	bezierVertex(48.05, -110.583, 65.5, -132.667, 86.8, -154.9);
	bezierVertex(108.4, -180.1, 136.983, -192.767, 172.55, -192.9);
	bezierVertex(203.85, -189.567, 224.483, -173.917, 234.45, -145.95);
	bezierVertex(244.417, -118.117, 241.233, -91.533, 224.9, -66.2);
	bezierVertex(196.5, -25.8, 121.6, -3.733, 0.2, 0);
	endShape();
	beginShape();
	vertex(234.45, -113.75);
	bezierVertex(234.45, -93.283, 227.117, -75.783, 212.45, -61.25);
	bezierVertex(197.917, -46.583, 180.333, -39.25, 159.7, -39.25);
	bezierVertex(139.2, -39.25, 121.617, -46.583, 106.95, -61.25);
	bezierVertex(92.417, -75.783, 85.15, -93.283, 85.15, -113.75);
	bezierVertex(85.15, -134.25, 92.417, -151.767, 106.95, -166.3);
	bezierVertex(121.617, -180.833, 139.2, -188.1, 159.7, -188.1);
	bezierVertex(180.333, -188.1, 197.917, -180.833, 212.45, -166.3);
	bezierVertex(227.117, -151.767, 234.45, -134.25, 234.45, -113.75);
	endShape();
	fill("#A72034");
	beginShape();
	vertex(226.15, -116.05);
	bezierVertex(226.15, -98.617, 219.85, -83.667, 207.25, -71.2);
	bezierVertex(194.917, -58.6, 179.967, -52.3, 162.4, -52.3);
	bezierVertex(144.8, -52.3, 129.767, -58.6, 117.3, -71.2);
	bezierVertex(104.867, -83.667, 98.65, -98.617, 98.65, -116.05);
	bezierVertex(98.65, -133.483, 104.867, -148.433, 117.3, -160.9);
	bezierVertex(129.767, -173.367, 144.8, -179.6, 162.4, -179.6);
	bezierVertex(179.967, -179.6, 194.917, -173.367, 207.25, -160.9);
	bezierVertex(219.85, -148.433, 226.15, -133.483, 226.15, -116.05);
	endShape();
}
function rightWing(){
	fill("#70162C");
	beginShape();
	vertex(-236.95, -113.75);
	bezierVertex(-236.95, -98.083, -232.65, -84.167, -224.05, -72);
	bezierVertex(-221.45, -68.267, -218.417, -64.683, -214.95, -61.25);
	bezierVertex(-200.383, -46.583, -182.8, -39.25, -162.2, -39.25);
	bezierVertex(-141.7, -39.25, -124.117, -46.583, -109.45, -61.25);
	bezierVertex(-106.017, -64.683, -103, -68.267, -100.4, -72);
	bezierVertex(-91.9, -84.167, -87.65, -98.083, -87.65, -113.75);
	bezierVertex(-87.65, -134.25, -94.917, -151.767, -109.45, -166.3);
	bezierVertex(-124.117, -180.833, -141.7, -188.1, -162.2, -188.1);
	bezierVertex(-182.8, -188.1, -200.383, -180.833, -214.95, -166.3);
	bezierVertex(-229.617, -151.767, -236.95, -134.25, -236.95, -113.75);
	endShape();
	beginShape();
	vertex(0.2, 0);
	bezierVertex(-0.3, -3.433, -0.9, -6.85, -1.6, -10.25);
	bezierVertex(-5.767, -30.717, -13.367, -51.3, -24.4, -72);
	bezierVertex(-39.033, -99.4, -59.7, -127.033, -86.4, -154.9);
	bezierVertex(-108, -180.1, -136.583, -192.767, -172.15, -192.9);
	bezierVertex(-203.45, -189.567, -224.083, -173.917, -234.05, -145.95);
	bezierVertex(-243.25, -120.217, -241.233, -95.567, -228, -72);
	vertex(-224.5, -66.2);
	bezierVertex(-196.233, -26, -121.933, -3.95, -1.6, -0.05);
	vertex(0.2, 0);
	endShape();
	fill("#A72034");
	beginShape();
	vertex(-228.65, -116.05);
	bezierVertex(-228.65, -98.983, -222.617, -84.3, -210.55, -72);
	vertex(-209.75, -71.2);
	bezierVertex(-197.417, -58.6, -182.467, -52.3, -164.9, -52.3);
	bezierVertex(-147.3, -52.3, -132.267, -58.6, -119.8, -71.2);
	vertex(-119, -72);
	bezierVertex(-107.1, -84.3, -101.15, -98.983, -101.15, -116.05);
	bezierVertex(-101.15, -133.483, -107.367, -148.433, -119.8, -160.9);
	bezierVertex(-132.267, -173.367, -147.3, -179.6, -164.9, -179.6);
	bezierVertex(-182.467, -179.6, -197.417, -173.367, -209.75, -160.9);
	bezierVertex(-222.35, -148.433, -228.65, -133.483, -228.65, -116.05);
	endShape();
}