-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 23, 2020 at 10:30 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netmattersnewscards`
--
CREATE DATABASE IF NOT EXISTS `netmattersnewscards` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `netmattersnewscards`;

-- --------------------------------------------------------

--
-- Table structure for table `newscards`
--

CREATE TABLE `newscards` (
  `cardID` int(255) NOT NULL,
  `IMG` varchar(255) CHARACTER SET utf8 NOT NULL,
  `toolTip` varchar(255) CHARACTER SET utf8 NOT NULL,
  `title` varchar(255) CHARACTER SET utf8 NOT NULL,
  `desc` varchar(255) CHARACTER SET utf8 NOT NULL,
  `color` varchar(255) CHARACTER SET utf8 NOT NULL,
  `authorIcon` varchar(255) CHARACTER SET utf8 NOT NULL,
  `authorName` varchar(255) CHARACTER SET utf8 NOT NULL,
  `datePosted` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `newscards`
--

INSERT INTO `newscards` (`cardID`, `IMG`, `toolTip`, `title`, `desc`, `color`, `authorIcon`, `authorName`, `datePosted`) VALUES
(1, '../IMGs/full-stack-web-l5m7.jpg', 'Web Design / Careers', 'Full stack developer', 'Salary: £25,000 - £36,000 per annum + Bonus (Dependent on Experience) Hours: 40 hours per week, M...', '#926fb1', '../IMGs/josh-ralph-icon.jpg', 'Josh Ralph', '2019-11-22'),
(2, '../IMGs/2nd-line-support.jpg', 'IT Support / Careers', '2nd Line support technician', 'SALARY: £22,000 - £28,000 + Bonus & Pension Netmatters is a rapidly growing IT and website de...', '#286abd', '../IMGs/rob-george-icon.jpg', 'Rob George', '2019-11-21'),
(3, '../IMGs/imagine-connecting-to.jpg', 'Telecoms Services / Insights', 'Imagine: Connecting to Your Business (and Cus...', 'Technology accelerates at a dizzying pace. And technology feels like it\'s accelerating because i...', '#c42e2a', '../IMGs/evan-thomas-icon.jpg', 'Evan Thomas', '2019-11-18');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
