-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2024-12-16 19:44:34.757

-- tables
-- Table: FileFolder
CREATE TABLE FileFolder (
    FileFolder_id int  NOT NULL,
    Files_id int  NOT NULL,
    CONSTRAINT FileFolder_pk PRIMARY KEY (FileFolder_id,Files_id)
);

-- Table: FileTags
CREATE TABLE FileTags (
    Files_id int  NOT NULL,
    Tags_id int  NOT NULL,
    CONSTRAINT FileTags_pk PRIMARY KEY (Files_id,Tags_id)
);

-- Table: Files
CREATE TABLE Files (
    id int  NOT NULL,
    Users_id int  NOT NULL,
    name varchar(255)  NOT NULL,
    path text  NOT NULL,
    size int  NOT NULL,
    upload_date timestamp  NOT NULL DEFAULT current_timestamp,
    metadata json  NULL,
    CONSTRAINT Files_pk PRIMARY KEY (id)
);

-- Table: Folder
CREATE TABLE Folder (
    id int  NOT NULL,
    name varchar(255)  NOT NULL,
    created_at timestamp  NOT NULL DEFAULT current_timestamp,
    CONSTRAINT FileGroups_pk PRIMARY KEY (id)
);

-- Table: TagCreated
CREATE TABLE TagCreated (
    id int  NOT NULL,
    Files_id int  NOT NULL,
    Tags_id int  NOT NULL,
    created_at timestamp  NOT NULL DEFAULT current_timestamp,
    isCreatedByUser bool  NOT NULL,
    CONSTRAINT AIAnalysis_pk PRIMARY KEY (id)
);

-- Table: Tags
CREATE TABLE Tags (
    id int  NOT NULL,
    tag_name varchar(50)  NOT NULL,
    UNIQUE INDEX AK_2 (tag_name),
    CONSTRAINT Tags_pk PRIMARY KEY (id)
);

-- Table: Users
CREATE TABLE Users (
    id int  NOT NULL,
    username varchar(50)  NOT NULL,
    email varchar(100)  NOT NULL,
    password_hash varchar(255)  NOT NULL,
    created_at timestamp  NULL DEFAULT current_timestamp,
    UNIQUE INDEX AK_0 (username),
    UNIQUE INDEX AK_1 (email),
    CONSTRAINT Users_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: FileFolder_Files (table: FileFolder)
ALTER TABLE FileFolder ADD CONSTRAINT FileFolder_Files FOREIGN KEY FileFolder_Files (Files_id)
    REFERENCES Files (id);

-- Reference: FileGroupMembers_FileFolder (table: FileFolder)
ALTER TABLE FileFolder ADD CONSTRAINT FileGroupMembers_FileFolder FOREIGN KEY FileGroupMembers_FileFolder (FileFolder_id)
    REFERENCES Folder (id);

-- Reference: fk_ai_file (table: TagCreated)
ALTER TABLE TagCreated ADD CONSTRAINT fk_ai_file FOREIGN KEY fk_ai_file (Files_id)
    REFERENCES Files (id)
    ON DELETE CASCADE;

-- Reference: fk_ai_tag (table: TagCreated)
ALTER TABLE TagCreated ADD CONSTRAINT fk_ai_tag FOREIGN KEY fk_ai_tag (Tags_id)
    REFERENCES Tags (id)
    ON DELETE CASCADE;

-- Reference: fk_file (table: FileTags)
ALTER TABLE FileTags ADD CONSTRAINT fk_file FOREIGN KEY fk_file (Files_id)
    REFERENCES Files (id)
    ON DELETE CASCADE;

-- Reference: fk_tag (table: FileTags)
ALTER TABLE FileTags ADD CONSTRAINT fk_tag FOREIGN KEY fk_tag (Tags_id)
    REFERENCES Tags (id)
    ON DELETE CASCADE;

-- Reference: fk_user (table: Files)
ALTER TABLE Files ADD CONSTRAINT fk_user FOREIGN KEY fk_user (Users_id)
    REFERENCES Users (id)
    ON DELETE CASCADE;

-- End of file.

