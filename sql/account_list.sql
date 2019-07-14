/*
Navicat MySQL Data Transfer

Source Server         : local
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : pwd-sys

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-07-14 21:22:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for account_list
-- ----------------------------
DROP TABLE IF EXISTS `account_list`;
CREATE TABLE `account_list` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `item` varchar(255) DEFAULT NULL,
  `catergory` int(16) NOT NULL,
  `num` bigint(255) DEFAULT NULL,
  `payMethods` int(16) DEFAULT NULL,
  `consumptionPlace` varchar(255) DEFAULT NULL,
  `consumptionDate` datetime DEFAULT NULL,
  `consumer` varchar(255) DEFAULT NULL,
  `createTime` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `tips` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of account_list
-- ----------------------------
INSERT INTO `account_list` VALUES ('1', 'ggg ', '1', '123', '1', 'werwqerwe', '2019-07-13 22:14:12', '5464t6b法国南部的官方给', '2019-07-13 22:15:35', 'fsfsdsdf', '0');
