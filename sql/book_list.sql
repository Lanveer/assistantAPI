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

 Date: 21/07/2019 17:39:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for book_list
-- ----------------------------
DROP TABLE IF EXISTS `book_list`;
CREATE TABLE `book_list`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `author` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `book_status` char(64) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `publish` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `category` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `cover` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `origin` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `price` decimal(10, 2) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `recorder` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `tips` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `status` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of book_list
-- ----------------------------
INSERT INTO `book_list` VALUES (1, 'fan', '23dwer', 'ioweuior', '在家', 'rwejtforjg', 'tool_books', '/upload/1563701714416_test.png', 'tushuguan', 12.00, '2019-07-21 17:35:15', 'erfgre', 'iuui4pyui1', 0);
INSERT INTO `book_list` VALUES (2, 'werwer', '23dwer', 'ioweuior', '1', 'rwejtforjg', 'other', '4444444444444484689', 'tushuguan', 478.00, '2019-07-21 15:38:57', 'erfgre', 'iuui4pyui', 0);
INSERT INTO `book_list` VALUES (10, 'ewwqq', 'wewrsdfcds', 'we', 'ds', 'undefined', 'fids', 'sd', 's', 123.00, '2019-07-21 16:11:20', 'wer', 'qedqw', 1);
INSERT INTO `book_list` VALUES (11, '深入浅出spring boot', '杨开振', 'java spring boot', '在架', '人民邮电出版社', 'tool_books', '暂无', '公司', 99.00, '2019-07-21 16:14:33', '樊亮', 'java 工具书一本', 0);

SET FOREIGN_KEY_CHECKS = 1;
