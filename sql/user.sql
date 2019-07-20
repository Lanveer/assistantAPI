/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50553
 Source Host           : localhost:3306
 Source Schema         : pwd-sys

 Target Server Type    : MySQL
 Target Server Version : 50553
 File Encoding         : 65001

 Date: 20/07/2019 19:12:04
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `role` int(16) NOT NULL,
  `status` int(16) UNSIGNED ZEROFILL NOT NULL DEFAULT 0000000000000000,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'lanveer', '123456', 1, 0000000000000000);
INSERT INTO `user` VALUES (2, 'fanli2', 'lanveer@123456', 0, 0000000000000000);

SET FOREIGN_KEY_CHECKS = 1;
