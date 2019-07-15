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

 Date: 15/07/2019 17:43:54
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for acount_category
-- ----------------------------
DROP TABLE IF EXISTS `acount_category`;
CREATE TABLE `acount_category`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `category_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `status` int(16) NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of acount_category
-- ----------------------------
INSERT INTO `acount_category` VALUES (1, 1, '吃饭', 'eating', 0);
INSERT INTO `acount_category` VALUES (2, 2, '衣服类', 'clothing', 0);
INSERT INTO `acount_category` VALUES (3, 3, '交通', 'transportation', 0);

SET FOREIGN_KEY_CHECKS = 1;
