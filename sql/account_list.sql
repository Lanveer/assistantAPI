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

 Date: 20/07/2019 19:13:23
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for account_list
-- ----------------------------
DROP TABLE IF EXISTS `account_list`;
CREATE TABLE `account_list`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
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
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of account_list
-- ----------------------------
INSERT INTO `account_list` VALUES (11, '324', 'eating', 324, 'aliPay', '234', '2019-07-18 15:25:47', '234', '2019-07-18 15:25:47', '234324', 0);
INSERT INTO `account_list` VALUES (10, 'qwe', 'clothing', 2, 'cash', '23', '2019-07-18 15:27:20', '23', '2019-07-18 17:53:58', '324', 0);
INSERT INTO `account_list` VALUES (9, '1', 'eating', 1, 'cash', '11', '2019-07-11 14:39:19', '123213', '2019-07-18 17:53:58', '11111', 0);

SET FOREIGN_KEY_CHECKS = 1;
