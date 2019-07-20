/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : pwd-sys

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-07-20 21:10:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for book_list
-- ----------------------------
DROP TABLE IF EXISTS `book_list`;
CREATE TABLE `book_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `book_status` char(64) NOT NULL,
  `publish` varchar(255) NOT NULL,
  `category` varchar(255) NOT NULL,
  `cover` varchar(255) NOT NULL,
  `origin` varchar(255) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `recorder` varchar(255) NOT NULL,
  `tips` varchar(255) NOT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of book_list
-- ----------------------------
INSERT INTO `book_list` VALUES ('1', 'fan', '23dwer', 'ioweuior', 'undefined', 'rwejtforjg', 'uiou', '4444444444444484689', 'tushuguan', '478.00', '0000-00-00 00:00:00', 'erfgre', 'iuui4pyui', '1');
INSERT INTO `book_list` VALUES ('2', 'werwer', '23dwer', 'ioweuior', '1', 'rwejtforjg', 'uiou', '4444444444444484689', 'tushuguan', '478.00', '0000-00-00 00:00:00', 'erfgre', 'iuui4pyui', '0');
