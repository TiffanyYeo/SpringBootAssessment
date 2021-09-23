package org.generation.SpringBootAssessment.service;

import org.generation.SpringBootAssessment.repository.entity.*;
import java.util.List;

public interface ItemService {

    Item save (Item item);  //save the item into the database

    void delete (int itemId);   //delete item from database

    List<Item> all();   //return all product items to user

    Item findById (int itemId);     //find a particular item

}
