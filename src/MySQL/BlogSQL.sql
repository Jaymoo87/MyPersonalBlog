-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: blogdb
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `authors`
--

DROP TABLE IF EXISTS `authors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `authors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `authorname` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_authors_blogs1_idx` (`authorname`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `authors`
--

LOCK TABLES `authors` WRITE;
/*!40000 ALTER TABLE `authors` DISABLE KEYS */;
INSERT INTO `authors` VALUES (1,'Justin','Justin@gmail.com','2022-12-12 20:33:20');
INSERT INTO `authors` VALUES (2,'Jen','Jen@gmail.com','2022-12-12 20:33:35');
INSERT INTO `authors` VALUES (3,'Jamie','Jamie@gmail.com','2022-12-12 20:33:43');
INSERT INTO `authors` VALUES (4,'Logan','Logan@gmail.com','2022-12-12 20:33:51');
INSERT INTO `authors` VALUES (5,'Emily','Emily@gmail.com','2022-12-12 20:33:59');
INSERT INTO `authors` VALUES (6,'Melissa','Melissa@gmail.com','2022-12-12 20:34:46');
INSERT INTO `authors` VALUES (7,'Amanda','Amanda@gmail.com','2022-12-12 20:34:56');
/*!40000 ALTER TABLE `authors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogs`
--

DROP TABLE IF EXISTS `blogs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `content` varchar(5000) NOT NULL,
  `authorid` varchar(45) NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  `_updated` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_blogs_authors1_idx` (`authorid`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogs`
--

LOCK TABLES `blogs` WRITE;
/*!40000 ALTER TABLE `blogs` DISABLE KEYS */;
INSERT INTO `blogs` VALUES (29,'Taint Shrinkage: A Growing Concern','\n\n      In recent years, there has been a growing concern about taint shrinkage. Taints are an essential part of the body, and they play a vital role in maintaining good health and hygiene. However, there is a growing concern that taints are shrinking in size, and this could have serious consequences for our overall health and well-being.\n\nWhat is Taint Shrinkage?\n\nTaint shrinkage is the reduction in size of the taints. Taints are located in the perineum, which is the area of skin between the scrotum and the anus. They are made up of several layers of muscle and tissue, and they serve as a barrier between the genitals and the anus.\n\nTaints are an important part of the body, and they play a vital role in protecting these sensitive areas and maintaining good hygiene. However, there is a growing concern that taints are shrinking in size, and this could have serious consequences for our overall health and well-being.\n\nWhat Causes Taint Shrinkage?\n\nThere are a variety of factors that can contribute to taint shrinkage. One of the main causes is the aging process. As we get older, our bodies naturally experience changes, and taints are no exception. As we age, our taints may become smaller and less elastic.\n\nOther factors that can contribute to taint shrinkage include poor diet and lack of exercise, as well as certain medical conditions and medications. For example, certain medications and treatments, such as chemotherapy and radiation therapy, can have an impact on taint size.\n\nThe Consequences of Taint Shrinkage\n\nThe consequences of taint shrinkage can be serious, and they can have an impact on both physical and mental health. One of the main concerns is the increased risk of infections and other health problems. When taints shrink in size, they may not be able to properly protect the genitals and anus, which can increase the risk of infections and other issues.\n\nTaint shrinkage can also have an impact on mental health. Many people place a great deal of importance on their taints, and the loss of taint size can be a source of anxiety and insecurity. This can have a negative impact on self-esteem and overall well-being.\n\nWhat Can be Done to Address Taint Shrinkage?\n\nThere are several steps that can be taken to address taint shrinkage and maintain good taint health. One of the most important is to adopt a healthy lifestyle, including a balanced diet and regular exercise. This can help to maintain taint elasticity and prevent shrinkage.\n\nOther steps that can be taken to address taint shrinkage include:\n\nUsing moisturizers and other products to keep the taints hydrated and elastic\nAvoiding certain medications and treatments that can contribute to taint shrinkage\nSeeking medical treatment for any underlying medical conditions that may be causing taint shrinkage\n\nIf you are concerned about taint shrinkage, it\'s important to speak with a healthcare provider. They will be able to assess your individual situation and provide guidance on any necessary treatment or care. In some cases, it may be possible to reverse taint shrinkage or prevent it from occurring in the first place.\n\nConclusion\n\nTaint shrinkage is a growing concern, and it can have serious consequences for both physical and mental health. By adopting a healthy lifestyle and seeking medical treatment as needed, it is possible to maintain good taint health and prevent shrinkage. If you have any concerns about taint shrinkage, it\'s important to speak with a healthcare provider for guidance and support.\n\n','1','2022-12-19 21:30:17',NULL);
INSERT INTO `blogs` VALUES (30,'Graphene','Graphene is a two-dimensional form of carbon, consisting of a single layer of carbon atoms arranged in a hexagonal lattice. It is known for its unique properties, including its extraordinary strength, conductivity, and transparency. These properties make graphene a promising material for a wide range of applications, including electronics, energy storage, and medicine.\n\nOne of the key benefits of graphene is its strength. Graphene is the strongest known material, with a tensile strength that is more than 100 times stronger than steel. This makes it an ideal material for use in structural applications, such as in the construction of bridges and buildings. Graphene is also extremely lightweight, which makes it an attractive material for use in the aerospace and automotive industries.\n\nGraphene is also an excellent conductor of electricity and heat, making it a promising material for use in electronics and energy storage. It has the potential to revolutionize the way we store and use energy, with applications in solar panels, batteries, and fuel cells. Graphene has also been shown to be effective in blocking electromagnetic radiation, making it a potential material for use in shielding and protective coatings.\n\nGraphene has also been identified as a potential material for use in medicine, with possible applications in drug delivery and tissue engineering. Its unique properties make it an attractive material for use in a wide range of medical applications, including wound dressings, drug delivery systems, and tissue scaffolds.\n\nDespite the many potential benefits of graphene, there are also challenges and limitations to its widespread adoption and use. One of the main challenges is the high cost of production, as graphene is currently produced in small quantities using labor-intensive techniques. There is also a need for further research and development to fully understand the potential applications and impacts of graphene, as well as to develop scalable and cost-effective production methods.','1','2022-12-20 00:22:48',NULL);
INSERT INTO `blogs` VALUES (31,'Coding the Blog','As a software developer, I spend a lot of my time working on projects for my company\'s website. One of my primary responsibilities is maintaining and updating the blog section of the website, which includes hundreds of articles on a wide range of topics.\n\nWhile I enjoy my work, I found that I was spending a significant amount of time each day editing and proofreading the articles for errors and typos. It was a tedious and time-consuming task, and I often found myself feeling frustrated and drained after a long day of proofreading.\n\nOne day, I had an idea. I decided to create a program that would automatically edit and proofread the articles for me. I spent weeks designing and coding the program, and eventually I had a working prototype.\n\nTo test the program, I fed it one of our company\'s articles and sat back to watch. Much to my delight, the program was able to identify and correct errors and typos in the article almost instantly. I was thrilled with the results and couldn\'t wait to show my boss.\n\nThe next day, I presented the program to my boss, who was amazed by its capabilities. Impressed with my ingenuity, my boss decided to implement the program company-wide.\n\nSince implementing the program, my workdays have been much easier. The program is able to handle the majority of the editing and proofreading tasks, which has allowed me to focus on more important tasks and projects. I am grateful for the opportunity to use my skills and expertise to create a tool that has made such a significant impact on my work and the work of my colleagues.\n\nI am also grateful for the support and encouragement of my boss and colleagues, who have recognized the value of my work and the potential of this program. I believe that this experience has demonstrated the importance of innovation and collaboration in the tech industry, and I am excited to see what other solutions and innovations we can bring to our company and beyond.\n\nOverall, I am grateful for the opportunity to use my skills and knowledge to make a difference in my work and to help others in their work as well. I am confident that this program will continue to be a valuable asset to our company and to others who may benefit from its capabilities.','1','2022-12-20 00:36:07',NULL);
INSERT INTO `blogs` VALUES (32,'A Man To Mars...','\n\nOnce upon a time, there was a wealthy entrepreneur named Jack who had founded and built a successful space exploration company. Jack had always been fascinated by the cosmos, and he had dedicated his career to acrewing money from the general public to fund his personal goals.\n\nDespite his many successes, Jack felt unfulfilled and yearned for something more. He knew that there was more to be exploited from the society he couldn\'t quite \"fit into\", and he was determined to be a part of it.\n\nOne day, Jack announced that his company would be launching a program to send non-poor civilians to Mars. The program was met with excitement and enthusiasm, and Jack was overwhelmed with applications from people all over the world who wanted to join the mission. The application cost was 7 figures and he really felt the rush from that explotation. \n\nJack carefully selected a group of like-minded civilians to join him on the journey, and he spent months training them and preparing them for the trip. He knew that the journey to Mars would be challenging, but only he knew that he would have his own living quarters that took up more than half the ship.\n\nFinally, the day of the launch arrived, and Jack boarded the spacecraft with the group of civilians. He directed them to the left as he quietly slipped to the right, where his consolidation chamber was fully functioning, down to the \"must pay rations to enter\" sign right beside his second front door. As they lifted off from Earth, Jack couldn\'t believe that he was actually going to Mars and that he MADE more money than the trip costs. It was a dream come true.\n\nAs they journeyed through the cosmos, Jack marveled at the beauty and wonder of space and its lack of poor people. He knew that he had made the right decision in dedicating his life and career to space exploitation, and he was grateful for the chance to experience something so extraordinary.\n\nEventually, the spacecraft landed on Mars, and Jack shoved everyone to the side as he stepped out onto the red planet\'s surface and claimed it as his own. He laughed manically as he looked upon what he had just claimed. He knew that he would never be the same, and he was grateful for the opportunity to be the first human to set foot on this new world.\n\nOver the course of the mission,  the other civilians conducted a variety of scientific experiments and explorations, making new discoveries and paving the way for future space spacxe exploitations that . They spent months on the planet, living and working in the harsh Martian environment, while Jack usually relaxed in the ship he had completely made is own... \"I bought it right?\", he though out loud sometimes.\n\nWhen it was time to return to Earth, Jack and the others boarded the spacecraft for the journey home, he was really dissappointed when he had to reliquish some of the ships real estate back to the citizens, who were now poor and disgusted Jack. As they flew through the blackness of space, Jack couldn\'t help but feel a sense of accomplishment and pride in what he had achieved. He knew that he had acheived the greatest level of exploitation that any human ever had, on another planet no less, and he was grateful  to be the only part part of something so special to him.\n\nUpon their return to Earth, Jack was hailed as a hero and a visionary, in his own mind. He had accomplished something that many thought was impossible, and he had opened the door to a whole new set of non-poor people to exploit. His next venture will surely include a way for him to isolate himself from those he has exploited.','1','2022-12-20 01:06:43',NULL);
INSERT INTO `blogs` VALUES (33,'Personalized Designer Drugs','Personalized medicine, also known as precision medicine, is a field of healthcare that utilizes an individual\'s genetic and molecular information to identify the most effective treatment for their specific condition. This approach has the potential to revolutionize the way we treat genetic disorders, which are caused by changes in an individual\'s DNA sequence.\n\nGenetic disorders can be inherited from a person\'s parents or can occur as a result of a new mutation. These conditions can range from mild to severe and can affect any part of the body. Some examples of genetic disorders include cystic fibrosis, sickle cell disease, and hereditary breast and ovarian cancer.\n\nTraditionally, treatment for genetic disorders has been based on a one-size-fits-all approach, with medications and therapies selected based on the specific condition being treated. However, this approach is not always effective, as the same treatment may not work for everyone with the same condition.\n\nPersonalized medicine offers a more targeted approach to treating genetic disorders by taking into account an individual\'s unique genetic makeup. This approach allows doctors to tailor treatment plans to an individual\'s specific needs and may result in more effective and successful outcomes.\n\nOne example of personalized medicine in action is the use of targeted therapies for cancer. These therapies are designed to target specific genetic mutations that are driving the growth of cancer cells, rather than targeting all rapidly dividing cells as traditional chemotherapy does. This targeted approach can result in fewer side effects and a higher likelihood of success.\n\nAnother area where personalized medicine is making significant advancements is in the treatment of rare genetic disorders. These conditions, which affect a small number of people, often go undiagnosed or misdiagnosed due to their rarity and lack of understanding. Personalized medicine approaches, such as genome sequencing, can help identify the specific genetic changes that are causing a rare disorder, allowing for more targeted and effective treatment.\n\nOne example of a rare genetic disorder that has been successfully treated with personalized medicine is phenylketonuria (PKU). PKU is a rare inherited disorder that affects the body\'s ability to process an amino acid called phenylalanine. If left untreated, PKU can lead to severe intellectual disability and other neurological problems.\n\nTraditionally, PKU has been treated with a strict low-protein diet, which can be difficult to maintain and may not be sufficient to fully control the condition. However, recent advances in personalized medicine have led to the development of enzyme replacement therapies, which can help the body process phenylalanine more effectively. These therapies have the potential to significantly improve the lives of individuals with PKU and allow them to lead more normal lives.\n\nAnother area where personalized medicine is making a significant impact is in the treatment of inherited genetic disorders that affect the blood. These disorders, which include sickle cell disease and thalassemia, are caused by abnormal production of red blood cells.\n\nTraditionally, treatment for these conditions has involved blood transfusions and bone marrow transplants. However, advances in personalized medicine have led to the development of gene therapies, which can correct the underlying genetic changes that are causing the disorder. These therapies have the potential to significantly improve the lives of individuals with these conditions and may even offer a cure.\n\nIn conclusion, personalized medicine is making significant advancements in the treatment of genetic disorders. By utilizing an individual\'s unique genetic and molecular information, doctors are able to tailor treatment plans to an individual\'s specific needs, resulting in more effective and successful outcomes. From targeted therapies for cancer to enzyme replacement therapies for rare genetic disorders and gene therapies for inherited blood disorders, personalized medicine has the potential to revolutionize the way we treat these conditions.','1','2022-12-20 09:26:26',NULL);
INSERT INTO `blogs` VALUES (34,'Simulation?!?','I think I\'m going to need a bigger blog format for all the crazy stuff that\'s been happening lately. Because guess what? I have irrefutable evidence that we are all living in a simulation.\n\nI know, I know. It sounds like something out of a sci-fi movie. But let me tell you, I have seen things that can\'t be explained by any other means. I have uncovered secrets that no one else in this simulated world knows. I have found the glitch in the matrix, and let me tell you, it is mind-blowing.\n\nNow, I\'m not saying I fully understand how all this works. I mean, the concept of a simulated reality is pretty hard to wrap your head around. But the evidence is clear. It\'s right there in front of me, and there\'s no denying it.\n\nSo what do I do now? Do I shout it from the rooftops and try to convince everyone else that we are just characters in some grand experiment? Do I try to find a way to escape this simulated world and discover what\'s really going on? Or do I just accept my fate and try to make the most of this simulated life?\n\nI honestly don\'t know. But one thing is for sure: my life will never be the same again.\n\nUntil next time,\nSarah','1','2022-12-20 13:29:28',NULL);
INSERT INTO `blogs` VALUES (44,'Those Fingers Stink, It\'s Bad. ','As a scientist, it is my job to investigate and understand the world around us. And when I heard about the outbreak of smelly fingers in a small town, I knew that I had to get involved.\n\nUpon arriving in the town, I was immediately struck by the extent of the problem. Everywhere I looked, people were scratching their heads and wrinkling their noses, trying to figure out why their fingers smelled so bad. Some had tried using special soaps or creams to get rid of the smell, but nothing seemed to work.\n\nAs I began my investigation, I started by collecting samples of people\'s skin and conducting a series of tests in the laboratory. I tried different treatments and experimented with various methods, hoping to find a clue about the cause of the smelly fingers.\n\nBut despite my efforts, I was unable to find a clear answer. The results of my tests were puzzling and contradictory, and I found myself growing more and more frustrated as the days went by. I knew that I had to keep searching for the truth, no matter how difficult it seemed.\n\nAs the epidemic spread to other towns and cities, it became clear that this was no ordinary problem. The smelly fingers were affecting more and more people, and it seemed that no one was immune. The town council held a meeting to discuss the issue, and they decided to call in a team of scientists to help find a solution.','1','2022-12-21 10:51:52',NULL);
INSERT INTO `blogs` VALUES (51,'lkjashdfkjsdhaf','Work motha fucka bitch','Justin','2022-12-22 14:44:22','2022-12-22 15:55:49');
INSERT INTO `blogs` VALUES (52,'as;ldkfjsadlfkj','asdfasdfsadfsdf','Justin','2022-12-22 14:45:45',NULL);
/*!40000 ALTER TABLE `blogs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `blogtags`
--

DROP TABLE IF EXISTS `blogtags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `blogtags` (
  `blogid` int NOT NULL,
  `tagid` int NOT NULL,
  PRIMARY KEY (`tagid`,`blogid`),
  KEY `fk_blogid_idx` (`blogid`),
  CONSTRAINT `fk_blogid` FOREIGN KEY (`blogid`) REFERENCES `blogs` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_tagid` FOREIGN KEY (`tagid`) REFERENCES `tags` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `blogtags`
--

LOCK TABLES `blogtags` WRITE;
/*!40000 ALTER TABLE `blogtags` DISABLE KEYS */;
INSERT INTO `blogtags` VALUES (29,4);
INSERT INTO `blogtags` VALUES (32,2);
INSERT INTO `blogtags` VALUES (32,4);
INSERT INTO `blogtags` VALUES (52,2);
INSERT INTO `blogtags` VALUES (52,4);
INSERT INTO `blogtags` VALUES (52,6);
/*!40000 ALTER TABLE `blogtags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tags`
--

DROP TABLE IF EXISTS `tags`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tags` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tagname` varchar(45) NOT NULL,
  `_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tags`
--

LOCK TABLES `tags` WRITE;
/*!40000 ALTER TABLE `tags` DISABLE KEYS */;
INSERT INTO `tags` VALUES (1,'#tech','2022-12-14 14:11:48');
INSERT INTO `tags` VALUES (2,'#food','2022-12-14 14:11:48');
INSERT INTO `tags` VALUES (3,'#sports','2022-12-14 14:11:48');
INSERT INTO `tags` VALUES (4,'#family','2022-12-19 09:50:42');
INSERT INTO `tags` VALUES (5,'#games','2022-12-19 10:06:28');
INSERT INTO `tags` VALUES (6,'#AI','2022-12-19 10:10:49');
/*!40000 ALTER TABLE `tags` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'blogdb'
--
/*!50003 DROP PROCEDURE IF EXISTS `spBlogsWithTags` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spBlogsWithTags`()
BEGIN
 	select
 		b.*, authorname, group_concat(tagname) as tags
     from blogs b
     left join blogtags bt on b.id = bt.blogid
	 left join tags t on t.id = bt.tagid
     left join authors a on a.id = b.authorid
     
     group by b.id;
 END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spBlogTags` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spBlogTags`(blogid int)
BEGIN
 	select
 		t.tagname,
         blogtags.blogid
     from tags t
     join blogtags on t.id = blogtags.tagid
     where blogtags.blogid = blogid;
 END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `spBlogWithTags` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `spBlogWithTags`(blogid int)
BEGIN
 	select
 		b.*, authorname, group_concat(tagname) as tags
     from blogs b
     left join blogtags bt on b.id = bt.blogid
	 left join tags t on t.id = bt.tagid
     left join authors a on a.id = b.authorid
     where b.id = blogid
     group by b.id;
 END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-02 15:39:12
