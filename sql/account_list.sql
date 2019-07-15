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

 Date: 15/07/2019 17:43:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account_list
-- ----------------------------
DROP TABLE IF EXISTS `account_list`;
CREATE TABLE `account_list`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `category` char(128) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `num` bigint(255) NULL DEFAULT NULL,
  `payMethods` char(16) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `consumptionPlace` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `consumptionDate` datetime NULL DEFAULT NULL,
  `consumer` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `tips` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account_list
-- ----------------------------
INSERT INTO `account_list` VALUES (5, '21321', 'clothing', 7, 'aliPay', '213213', '2019-07-16 17:26:03', '123213', '2019-07-17 17:26:06', '12321', 0);
INSERT INTO `account_list` VALUES (6, '买手机', 'transport', 12345, 'cash', '四川', '2019-07-15 17:36:50', '樊亮', '2019-07-09 17:36:55', 'iphone7plus', 0);

SET FOREIGN_KEY_CHECKS = 1;
